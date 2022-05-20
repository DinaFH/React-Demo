import InputField from "./Components/InputField"
import ImageSlider from "./Components/ImageSlider"
import "bootstrap/dist/css/bootstrap.min.css";
import { SliderData } from "./Components/SliderData";
let App=()=>{
    return(
        <div>

                <InputField/>
              
                <ImageSlider slides={SliderData}/>
        
        </div>
    )

}
export default App;