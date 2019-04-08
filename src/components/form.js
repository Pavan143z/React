import React,{Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            FirstName:'',
            LastName:' ',
            Topic:'Angular'

        }
    }

    handleSubmit=()=>{
        console.log(this.state.FirstName)
    }


    handleChangeFirstName=(event)=>
    {
        this.setState({FirstName:event.target.value})
    }
    
    handleChangeLastName=(event)=>
    {
        this.setState({LastName:event.target.value})
    }
    handleChangeTopic=(event)=>
    {
        this.setState({Topic:event.target.value})
    }

    handleSubmit=(event) => {
    alert(`${this.state.FirstName}
    ${this.state.LastName}
    ${this.state.Topic}`)
    console.log(this.state.FirstName);
    console.log(this.state.LastName);

    console.log(this.state.Topic);
    event.preventDefault();

}
    render(){
        return (
        <div>
           <h1>Form Demo</h1>
           <form onSubmit={this.handleSubmit}>
               <div>
                   <label >FirstName</label>
                   <input type="text" value={this.state.FirstName} onChange={this.handleChangeFirstName}/>
               </div>
               <div>
                   <label>LastName</label>
                   <input type="text" value={this.state.LastName} onChange={this.handleChangeLastName}/>
               </div>
               <div>
                   <label>Topic</label>
                   <select value={this.state.Topic} onChange={this.handleChangeTopic}>
                       <option value="Angular">
                           Angular
                       </option>
                       <option value="Node">
                           Node
                       </option>
                       <option value="React">
                           React
                       </option>
                       
                   </select>

                  
               </div>
               <button type="submit">Submit</button>
           </form>
           </div>
        )
    }

}
export default Form;