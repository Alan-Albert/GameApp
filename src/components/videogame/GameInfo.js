import React from 'react'
import { useParams } from 'react-router-dom'

export const GameInfo = () => {
      
    const {id} = useParams();

  return (
    <div>GameInfo:{id} </div>
  )
}
