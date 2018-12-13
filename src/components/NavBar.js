import React,{Fragment} from 'react';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
	return (
<Fragment>
  <nav className = "blue-grey">
  	<div className = 'container'>
    <div className="nav-wrapper">
     <NavLink to="/"><a href="#" className="btn btn-floating">GNB</a></NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <NavLink to="/accounts"><li><a>Accounts</a></li></NavLink>
        <NavLink to="/signup"><li><a>Sign Up</a></li></NavLink>
      </ul>
    </div>
	</div>
  </nav>
</ Fragment>
	)
}

 export default NavBar;
