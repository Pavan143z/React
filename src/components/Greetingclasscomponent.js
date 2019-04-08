import React from 'react';


class GreetingClassComponent extends React.Component{



render(props){
    return <h1>hello {this.props.name}</h1>
}
}
export default GreetingClassComponent;