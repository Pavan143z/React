// import React from 'react'
// class CustomerInfo extends React.Component{
//     constructor(props){
//         super(props)
//         //step1
//         this.state={
//             user:{
//                 userName:'',
//                 userEmail:'',
//                 userMobile:'',
//                 userAddress:'',
//                 userDescription:'',
//                 userDateofVisit:''
//             }//user end
//         }//state end
//     } //constructor end

//      //step 4 define an event method
//      handleSubmit(e){
//          e.preventDeafault();
//          alert(`${this.state.user.userName}`)
//          alert(`${this.state.user.userEmail}`)
//          alert(`${this.state.user.userMobile}`)
//          alert(`${this.state.user.userAddress}`)
//          alert(`${this.state.user.userDescription}`)
//      }
//      UpdateState(ctrl,value)
//      {
//          const {user}=this.state;//get the current state value
//          user[ctrl]=value;//update the user entered data
//          this.setState({user});// update the new user
//      }
//     render()
//     {

//         const {user}=this.state;
//         return(
//             <div>
//             <h1>State Add and Delete</h1>
//             {/*Define an event onSubmit and call the method*/}
//             <form onSubmit={(e)=>this.handleSubmit(e)}>
//                 <label>Name</label>
//                 <input type="text" value={user.userName} onChange={(e)=>this.UpdateState('userName',e.currentTarget.value)}/>
//                 <br/>
//                 <label>Email</label>
//                 <input type="text"  value={user.userEmail} onChange={(e)=>this.UpdateState('userEmail',e.currentTarget.value)}/>
//                 <br/>
//                 <label>Mobile</label>
//                 <input type="text"  value={user.userMobile} onChange={(e)=>this.UpdateState('userMobile',e.currentTarget.value)}/>
//                 <br/>
//                 <label>Address</label>
//                 <input type="text"  value={user.userAddress} onChange={(e)=>this.UpdateState('userAddress',e.currentTarget.value)}/>
//                 <br/>
//                 <label>Description</label>
//                 <input type="text"  value={user.userDescription} onChange={(e)=>this.UpdateState('userDescription',e.currentTarget.value)}/>
//                 <br/>
//                 <label>User Date of Visit</label>
//                 <input type="text" value={user.userDateofVisit}/>
//                 <br/>

//                 <button type="submit">Submit</button>
//             </form>
//             </div>
//         )
//     }
// }
// export default CustomerInfo;





import React from 'react'
import CustomerDisplay1 from './customer-display';
class CustomerInfo extends React.Component {
    constructor() {
        super()
        //step1
        this.state = {
            user: {
                userName: '',
                userEmail: '',
                userMobile: '',
                userAddress: '',
                userDescription: '',
                userDateofVisit: ''
            }//user end 
            ,
            display:false
        }//state end
    }//constructor end
    //step4 define an event method 
    handleSubmit(e) {
        e.preventDefault();
        alert(`${this.state.user.userName}`)
        alert(`${this.state.user.userMobile}`)
        alert(`${this.state.user.userAddress}`)
        alert(`${this.state.user.userDescription}`)
        this.setState({display:true})
    }
    UpdateState(ctrl, value) {
        const { user } = this.state;//get the current state value
        user[ctrl] = value;//update the user entered data
        this.setState({ user });// update the new user state
    }
    resetState(){
        this.setState(
            {
        user: {
            userName: '',
            userEmail: '',
            userMobile: '',
            userAddress: '',
            userDescription: '',
            userDateofVisit: ''
        },
        display:false
    }
        )
    
}
    render() {
        const { user } = this.state;
        return (
            <div>
                <h1>State Add and Delete</h1>
                {/* Define an event OnSubmit and call an method */}
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label> User Name</label>
                    {/* Set the value of each Field using value to state */}
                    <input type="text" value={user.userName} onChange={(e) => 
                        this.UpdateState('userName', e.currentTarget.value)} />
                    <br />
                    <label> Email</label>
                    <input type="text" value={user.userEmail} onChange={(e) => 
                        this.UpdateState('userEmail', e.currentTarget.value)} />
                    <br />
                    <label> Mobile</label>
                    <input type="text" value={user.userMobile} onChange={(e) => 
                        this.UpdateState('userMobile', e.currentTarget.value)} />
                    <br />
                    <label> Address</label>
                    <input type="text" value={user.userAddress} onChange={(e) => 
                        this.UpdateState('userAddress', e.currentTarget.value)} />
                    <br />
                    <label> Description</label>
                    <input type="text" value={user.userDescription} onChange={(e) => 
                        this.UpdateState('userDescription', e.currentTarget.value)} />
                    <br />
                    <label> User Date of Visit</label>
                    <input type="text" value={user.userDateofVisit} onChange={(e) =>
                         this.UpdateState('userDateofVisit', e.currentTarget.value)} />
                    <br />
                    <button className="btn btn-success" type="submit">Submit</button>

                </form>
                
                {/* <CustomerDisplay1 userData={this.state.user} deleteCustomer={(e) => this.resetState()} /> */}
                { this.state.display ?
                <CustomerDisplay1 deleteCustomer={(e)=>this.resetState()} userData={this.state.user}/>:
            null 
        }
            </div>

        )
    }
}
export default CustomerInfo;
