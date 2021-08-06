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
      class="btn btn-primary  btn-sm"
      style={style}
      onClick={click}
    >
      <i class="fas fa-angle-up" />
    </button>
    )
  
};

export default ScrollToTop;
