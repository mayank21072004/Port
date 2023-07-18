import React from "react"
import logo1 from "./pic/profile3.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={logo1} alt='' className="logo" />
          </div>
          <p>© 2023. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
