import {Component} from 'react';
class InputField extends Component{

    
    constructor(){
        super();
        this.state={
            inputText:"",
        }
    }
   
    resetInputField=()=>{       
       
        this.setState({inputText:""})
      
    }

    render(){
         return(
                
        <div class="center">        
        <input
        id="input_field"
        type="text"
        value={this.state.inputText}
        onChange={(e)=>{
           this.setState({inputText:e.target.value})
        }}
          />
         <div id="show">
         {this.state.inputText}
             </div> 
        
          <button
          className="btn btn-sm btn-success"
          onClick={this.resetInputField}
          >
          Reset
          </button>
    </div>)
         
}
}
export default InputField;