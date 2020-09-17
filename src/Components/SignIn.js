import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
const SignIn = () => {
	return(
		<div className="signin-background img-fluid">
		<div className="container-fluid signin-form">
		 <div className="row">
		 <div className="col-12">
			 <Navbar/>
		 </div>
		  <div className="col-12">
		   <div className="inner-signin">
		<form id="login">
		<div className="email"> 
		<label>Email </label>
		<input type="text" name="email"/>
		</div>
		<div>
		<label>Password </label>
		<input className="password" type="text" name="password"/>
		</div>
		</form>
		<div>
		<button className="loginSubmit">Sign in</button>
		</div>
		<label>Don't have an account?</label>
		<Link to="/signup"><button>Signup</button>
		</Link>
		   </div>
		  </div>
		 </div>
		 </div>
		</div>
		)
}
export default SignIn;