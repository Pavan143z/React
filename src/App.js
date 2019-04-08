import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';

import Welcome from './components/welcome';
import Functioncmpdemo from './components/Functioncmpdemo';
import Greetings from './components/Greetings';
import Greetingclasscomponent from './components/Greetingclasscomponent';
import NumListClassComp from './components/NumListClassComp';
import User from './components/User';
import EventDemo1 from './components/event-demo';
import EventPros from './components/event-demo'
import PropsDemo from './components/Propsdemo';
import StateDemo1 from './components/statedemo';
import Counter from './components/increment';
import Home from './components/home';
import About from './components/about';
import Header from './components/Header';
import Form from '../src/components/form';
import formdemo1 from './components/formdemo1';
import formdemo2 from './components/formdemo2';
import RefDemo1 from './components/RefDemo1';
import LifeCycleA from './components/LifecycleA'
import CustomerInfo from './components/customer-info'





class App extends Component {
  render() {
    // let numbers = [11, 12, 13, 14, 1];

    // let user = {
    //   name: "Rashmi Pawaskar",
    //   hobbies: ["Sports", "Swimming", "Music", "Watching Movies", "Shopping"],

    // };
    return (
      <Router
      >

        <div>

          <Header
          />

          <div
            className="container">

            <Switch>

              <Route
                exact path="/"
                component={Home} />

              <Route
                exact path="/about"
                component={About} />
                <Route
                exact path="/form"
                component={Form} />
                <Route
                exact path="/formdemo1"
                component={formdemo1} />
                <Route
                exact path="/formdemo2"
                component={formdemo2} />
                <Route
                exact path="/RefDemo1"
                component={RefDemo1} />
                <Route
                exact path="/adddelete1"
                component={CustomerInfo} />
                <Route
                exact path="/lifecyclea"
                component={LifeCycleA} />

            </Switch>

          </div>

        </div>

      </Router>

















      // <div className="App">
      //   <header className="App-header">
      //   <p>Welcome to ReactJs</p>
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"href="https://reactjs.org" target="_blank" rel="noopener noreferrer">

      //       Learn React
      //     </a>
      //   </header>
      // </div>
      //     <div>
      //       {/* <h1>Hello Welcome to React app</h1>
      //       <h1>This is another tag</h1>*/}
      //  <Welcome/>
      //  <Functioncmpdemo/> 
      //     </div>
      // <div>
      //   <h1>Welcome To Routing Module</h1>

      //   <div className="container">
      //     <div className="row">
      //       <div className="col-xs-12">
      //         <Greetings name="pavan" />

      //       <Greetings name="Pravalli" />
      //       <Greetings name="rashmi" />
      //       <hr />
      //       <Greetingclasscomponent name="pavan" />
      //       <NumListClassComp numbers={numbers} />
      //       <User name ={user.name} age={30} user={user}/>
      //       <h2>This is Children text</h2>
      //       <EventDemo1/>
      //       <PropsDemo name="PropsDemo"/>
      //       <EventPros age={23}/> 
      //       <StateDemo1 message="welcome home buddy"/>
      //       <Counter/>  

      //     </div></div>
      // </div> 





      //         <BrowserRouter>
      //           <div>
      //             <ul>
      //               <li>

      //                 <Link to="/">Home</Link>
      //               </li>
      //               <li>

      //                 <Link to="/About">about</Link>
      //               </li>
      //             </ul>
      //             <div>
      //               <switch>
      //                 <Route exact path="/" Component={Home} />
      //                 <Route exact path="/about" Component={About} />


      //               </switch>

      //             </div>
      //           </div>
      //         </BrowserRouter>

      //       </div></div>
      //   </div>
      // </div>

    );
  }
}

export default App;
