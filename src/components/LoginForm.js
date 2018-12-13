import React, { Fragment } from 'react'
import NavBar from './NavBar';

const LoginForm = () => {
    return (
        <Fragment>
            <NavBar />

			 	<div class="row container">
				    <form class="col s12">
				      <div class="row">
				        <div class="input-field col s6">
				        	<i class="material-icons prefix">account_circle</i>
				        	<input id="tag_faces" type="text" class="validate"></ input>
				        	<label for="tag_faces">Username</label>
				        </div>
				        <div class="input-field col s6">
				        	<i class="material-icons prefix">lock</i>
				        	<input id="password" type="password" class="validate"></ input>
				        	<label for="password">Password</label>
				        </div>
						<button class="btn waves-effect waves-light" type="submit" name="action">Submit
							<i class="material-icons right">send</i>
						</button>
				      </div>
				    </form>
				 </div>
        </Fragment>
    )
}

export default LoginForm
