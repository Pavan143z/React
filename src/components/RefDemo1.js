import React from 'react'
class RefDemo1 extends React.Component{
    constructor(props){
        super(props)
        //step1
        this.myrefvar=React.createRef();
    }
//step 3
    componentDidMount()
    {
        this.myrefvar.current.focus();
        console.log(this.myfavvar);
    }
    render()
    {
        return(
            <div>
                {/* //step 2 */}
                <input type="text" ref={this.myrefvar}/>
                <button>Click</button>
            </div>
        )
    }
}
export default RefDemo1;