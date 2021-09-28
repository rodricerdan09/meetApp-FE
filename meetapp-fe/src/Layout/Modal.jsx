import React from 'react'
import ReactDOM from "react-dom";

const Modal = ({ children, isOpen, closeModal }) => {
    const handleModalContainerClick = (e) => e.stopPropagation();
  
    return ReactDOM.createPortal(
      
<div className={`modal fade ${isOpen && "show"}`} id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document" onClick={handleModalContainerClick}>
      <div className="modal-content">
          <div className="modal-header">
              <button class="close" type="button" data-dismiss="modal" aria-label="Close" onClick={closeModal} >
                  <span aria-hidden="true">×</span>
              </button>
              <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          </div>
          <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          {children}
          <div className="modal-footer">
              <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              <a class="btn btn-primary" href="login.html">Logout</a>
          </div>
      </div>
  </div>
</div>,
      document.getElementById("modal")
    );
  };
  
  export default Modal;
