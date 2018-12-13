import React,{Fragment} from 'react';
import { NavLink } from 'react-router-dom';


const LogOutNavBar = () => {
	return (
    <Fragment>
      <nav className = "blue-grey">
        <div className = 'container'>
          <div className="nav-wrapper">
            <NavLink to="/"><a className="btn btn-floating">GNB</a></NavLink>
            <ul className="right">
              <li><NavLink to='/accounts'>Accounts</NavLink></li>
              <li><NavLink to='/'>Log Out</NavLink></li>
            </ul>
          </div>
      </div>
      </nav>
    </ Fragment>
	)
}

 export default LogOutNavBar;
