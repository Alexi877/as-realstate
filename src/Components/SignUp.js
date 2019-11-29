import React from 'react';
const SignUp = () => {
	return(
		<div> 
		<form> 
		<label>Email</label>
		<input type="text" name="email"/>
		<label>Password</label>
		<input type="text" name="password"/>
		<label>Re-Type Password</label>
		<input type="text" name="password-eval"/>
		</form>
		</div>
		)
}