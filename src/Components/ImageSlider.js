
import { SliderData } from './SliderData';
import {useState} from 'react';

let ImageSlider=({slides})=>{
     const [current,setCurrent]=useState(0);
     const [intervalID, setIntervalID] = useState(0);
     const length=slides.length;
   
     const getNextImage=()=>{      
        setCurrent(current===length-1?length-1:current+1);
      
        }
     const getPrevImage=()=>{       
       setCurrent(current===0?0:current-1);
       
     }
   
    const startSlideShow=()=>{       
        let interval= setInterval(() => {
            setCurrent((current) => current + 1);
         }, 1000);
         setIntervalID(interval);
     }
   const  stopSlideShow=()=>{       
        clearInterval(intervalID);
        
     }  
     if(!Array.isArray(slides)||slides.length==0){
         return null;
     }
         return(
             
       <div className='center'>  
       <pre>


       </pre>
           {SliderData.map(
               (slide,index)=> {
               return (<div className={index==current?'slide_active':'slide'}key={index}>
                     {index === current && (
              <img src={slide.image} className="image"/>
            )} 
                      </div>
                   );
                             
                            })}
           
              <pre>

           
             </pre>
          <div>
          <button className="btn btn-sm btn-primary"onClick={getNextImage}>Next</button>
          <button className="btn btn-sm btn-primary"onClick={getPrevImage}>Prev</button>
          <button className="btn btn-sm btn-primary"onClick={startSlideShow}>Start </button>
          <button className="btn btn-sm btn-primary"onClick={stopSlideShow}>Stop </button>
          </div>

    </div>)
         
}

export default ImageSlider;