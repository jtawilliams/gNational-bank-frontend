import React,{Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import NavBar from './NavBar'


const Home = () => {
	return (
    <Fragment>
      <NavBar />
        <h1>Home</h1>
	      <div className='homeBackground'>
		      <h1>Galvanize National Bank</ h1>
	      </ div>
    </ Fragment>
	)
}

 export default Home;