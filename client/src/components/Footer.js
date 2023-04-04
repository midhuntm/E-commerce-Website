import React from 'react'
import './Login.css';
export default function Footer() {
  return (
    <div className='footerdiv'> 
        {`Copyright © ${new Date().getFullYear()} PedroTech Shop.`}
    </div>
  )
}
