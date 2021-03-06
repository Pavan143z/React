import React from 'react'
class StateDemo extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            message:this.props.message
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you for Visiting'
        })
    }
    render()
    {
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Update State</button>
            </div>
        )
    }
}
export default StateDemo;