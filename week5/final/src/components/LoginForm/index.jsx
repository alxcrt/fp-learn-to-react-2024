import React, { useState } from 'react';

import API_URL from '../../utils/API_URL';
import { useAuth } from '../../hooks/useAuth';

export default function LoginForm() {
	const [inputState, setInputState] = useState('');
  
	const { setUser, setToken } = useAuth();

	const onLogin = async () => {
		const response = await fetch(`${API_URL}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name: inputState }),
		});

		const data = await response.json();
		console.log(data);
		setUser(data.user);
		setToken(data.token);
	};

	return (
		<div className='flex gap-4'>
			<input
				type='text'
				placeholder='Name'
				className='w-full border-0 bg-transparent outline-none flex-1'
				onChange={(e) => setInputState(e.target.value)}
			/>

			<button
				className='border border-slate-400 rounded-md p-2 bg-slate-400 text-white'
				onClick={onLogin}
				disabled={!inputState}>
				Log in
			</button>
		</div>
	);
}
