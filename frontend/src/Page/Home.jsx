import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
const user=localStorage.getItem('name');

  }, [])
    const token = localStorage.getItem('token')
    if (token) {
      console.log('User is logged in')
    } else {
      console.log('User is not logged in')

    }
  return (
    <div>Home</div>
  )
}

export default Home