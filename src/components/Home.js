import React,{Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import NavBar from './NavBar'


const Home = () => {
	return (
    <Fragment>
      <NavBar />
	      <div className='homeBackground'>
		      <h1 className='container'>Galvanize National Bank</ h1>
	      </ div>
    </ Fragment>
	)
}

 export default Home;