import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/videogame/Home'
import { Navbar } from '../components/videogame/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    {/* <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />

                    <Route path="search" element={<SearchScreen />} /> */}
                    {/* <Route path="hero/:heroeId" element={<HeroScreen />} /> */}

                    <Route path="/" element={<Home />} />

                </Routes>
            </div>
        </>
    )
}