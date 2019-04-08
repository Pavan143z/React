import React,{Component } from 'react'

class Home extends Component {
    render(){
      
        return (
            <div>
            <h1>Welcome to Home Page</h1>
        <img src={ require ('./maxresdefault.jpg')} width="1000"/>
        </div>
    )
}


}
export default Home;