import React,{useState, useEffect }  from 'react';


const ScrollToTop = () => {
    
    let style={
        right: '1rem', 
        bottom: '1rem', 
        position: 'fixed',
        
    }
    // y es la posicion de la pagina al hacer scroll
    const [y, setY] = useState(0)
    useEffect(() => {
        window.onscroll = () => {
          setY(window.scrollY)
        }
      }, []);
    
    
    
    const click=()=>{
        
        window.scrollTo(0, 0)
    }
   
  
    return y===0 ?  
    (
    <span></span>
    )
    :
    (
    <button
      className="btn btn-primary  btn-sm"
      style={style}
      onClick={click}
    >
      <i className="fas fa-angle-up"/>
    </button>
    )
  
};

export default ScrollToTop;
