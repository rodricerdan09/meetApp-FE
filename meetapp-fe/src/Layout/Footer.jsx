import React from 'react'  

const Footer = () => {
  return (
  
  <footer className="sticky-footer bg-white">  
    <div className="container my-auto">  
      <div className="copyright text-center my-auto">  
        <span>Copyright ©  {(new Date().getFullYear())} <strong className="text-primary">MeetApp, Inc.</strong></span>  
      </div>  
    </div>  
  </footer>  

  )
}

export default Footer;



