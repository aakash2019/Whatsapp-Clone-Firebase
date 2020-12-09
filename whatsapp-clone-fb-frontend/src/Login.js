import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';

import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import { auth, provider } from './firebase';

function Login() {
	const [{}, dispatch] = useStateValue();

	const signIn = () => {
		auth.signInWithPopup(provider)
			.then(result => (
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user
				})
			))
			.catch(error => alert(error.message))
	}

	return (
		<div className="login">
			<div className="login__container">	
				<img src="data:image/jpeg;base64,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"
					alt=""
				/>
				<div className="login__text">
					<h1>Sign in to WhatsApp</h1>
				</div>

				<Button onClick={signIn}>
					Sign In With Google
				</Button>	
			</div>			
		</div>
	)
}

export default Login