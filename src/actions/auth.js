// import firebase  from "../firebase/firebaseConfig";
import Swal from "sweetalert2";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
    return async(dispatch) => {
        
        firebase.auth().signInWithEmailAndPassword( email, password )
        .then( async({ user }) => {
            
            const resp = await fetchSinToken( 'auth', { email, password }, 'POST' );
            const body = await resp.json();
            if( body.ok ) {
                console.log('body ok');
                localStorage.setItem('token', body.token );
                localStorage.setItem('token-init-date', new Date().getTime() );
            }
            dispatch(login( user.uid, user.displayName ));
        })
        .catch( e => {
            console.log(e);
            Swal.fire('Error', e.message, 'error');
        })
        dispatch( finishLoading() );
        
    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return async( dispatch ) => {
        const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST' );
        const body = await resp.json();
        dispatch( startLoading() );
        if( body.ok ) {
            console.log('body ok');
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
        }
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) => {

                await user.updateProfile({ displayName: name });

                dispatch(
                    login( user.uid, user.displayName )
                );
            })
            .catch( e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            })

    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName )
                )
            });

    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});


export const startRenew = () => {
    return async( dispatch ) => {
        const resp = await fetchConToken( 'auth/renew' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        }
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();
        localStorage.clear();
        dispatch( logout() );
    }
}


export const logout = () => ({
    type: types.logout
})

