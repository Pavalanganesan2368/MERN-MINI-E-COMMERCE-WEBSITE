import React from 'react'

const Footer = () => {
     const date = new Date();
     return (
          <footer className="py-1 bg-dark">
             <p className="text-center text-white mt-1 ">
               JVLcart - {date.getFullYear()}, All Rights Reserved
             </p>
          </footer>
     )
}

export default Footer