import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
const SignUp = () => {
	return(
		<div className="signin-background" >
		<div className="container-fluid signin-form">
		 <div className="row">
		 <div className="col-12">
			 <Navbar/>
		 </div>
		  <div className="col-12">
		   <div className="inner-signin">
		<form>
		<div className="email"> 
		<label>Email </label>
		<input type="text" name="email"/>
		</div>
		<div>
		<label>Password </label>
		<input className="password" type="text" name="password"/>
		</div>
		<div>
		<label>Password </label>
		<input className="password" type="text" name="password"
		placeholder="Re-type Password"
		/>
		</div>
		</form>
		<div>
		<button className="signupSubmit">Sign up</button>
		</div>
		<label>Back to </label>
		<Link to="/signin"><button>Signin</button>
		</Link>
		   </div>
		  </div>
		 </div>
		 </div>
		</div>
		)
}

export default SignUp;