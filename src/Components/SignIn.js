import React from 'react';
import {Link} from 'react-router-dom';
const SignIn = () => {
	return(
		<div className="signin-background" >
		<div className="container-fluid signin-form">
		 <div className="row">
		 
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
		</form>
		<label>Don't have an account?</label>
		<Link to="/signup"><button>Signup</button>
		</Link>
		<div>
		<Link to="/search"><button>Go Back</button>
		</Link>
		</div> 
		   </div>
		  </div>
		 </div>
		 </div>
		</div>
		)
}
export default SignIn;