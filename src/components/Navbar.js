import React from 'react'

import propTypes from 'prop-types'

import '../App.css'
 
import image from '../images/wc-logo.webp'


export default function Navbar (props) {
  return (
    <nav className=" bg-[rgb(66,139,202)] px-8  md:pl-24 py-2 ">

      <img className='h-9' alt='src' src={image}/>
    

     </nav>
  )
}

Navbar.propTypes= {title:propTypes.string}

