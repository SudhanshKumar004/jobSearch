import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div id='mainfooter'>
        <div id='footer1'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est fuga et impedit. Hic, mollitia expedita!</p>
        </div>


        <div id='footer2'>
          <Link to="home">Home</Link>
          <Link to="companysearch">Search</Link>
          <Link to="companylogin">Login</Link>
        </div>


        <div id='footer3'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, provident assumenda cum tempora vero ullam illum in fugiat ipsa aspernatur.</p>
        </div>
      </div>
      <div id='copyright'>
        <h2>FindMyJob CopyRight &copy; | All Rights Reserved @2025 | by Sudhansh</h2>
      </div>
    </>
  )
}

export default Footer
