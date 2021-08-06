import React from 'react'  

const Footer = () => {
  return (
  
  <footer class="sticky-footer bg-white">  
    <div className="container my-auto">  
      <div className="copyright text-center my-auto">  
        <span>Copyright ©  {(new Date().getFullYear())} MeetApp, Inc.</span>  
      </div>  
    </div>  
  </footer>  

  )
}

export default Footer



