
import React from 'react'
import {Link}from 'react-router-dom';
export const Header = () => {
return ( 
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container-fluid">
<div className="navbar-header">

<Link className="navbar-brand" to="/">Brand</Link>
</div>
<div className="collapse navbar-collapse"id="bs-example-navbar-collapse-1">
<ul className="nav navbar-nav">
<li className="active">
<Link to="/">Home
<span className="sr-only">
</span></Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/form">Form</Link></li>
<li><Link to="/formdemo1">formdemo1</Link></li>
<li><Link to="/formdemo2">formdemo2</Link></li>
<li><Link to="/RefDemo1">RefDemo1</Link></li>
<li><Link to="/adddelete1">AddDelete1</Link></li>
<li><Link to="/lifecyclea">LifeCycleA</Link></li>








</ul> 
<ul className="nav navbar-nav navbar-right">
{/* <li><Link to="/login">Login</Link></li> */}
</ul>
</div>
</div>
</nav>
);
}
export default Header;
