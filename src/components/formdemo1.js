import React,{Component } from 'react'

class formdemo1 extends Component {
    render(){
    const myStyle={
        color:'white',
        backgroundColor:'green'
    //c is in caps in bgcolor
      }
      return(
        <div>
          <h1 style={myStyle}>Inline style  </h1>
        </div>
      ); 
    
      
    }
}
export default formdemo1;

