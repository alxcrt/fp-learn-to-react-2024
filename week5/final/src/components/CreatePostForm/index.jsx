import { useState, useRef, useEffect, useCallback } from 'react';

import TextInput from '../TextInput/TextInput';
import { useAuth } from '../../hooks/useAuth';

export default function CreatePostForm({ postTweet }) {
	const [inputState, setInputState] = useState('');

	const { user } = useAuth();

	//we initialize the inputRef
	const inputRef = useRef(null);

	//we use useEffect to focus on the inputRef when the component mounts
	useEffect(() => {
		if (!inputRef.current) return;
		inputRef.current.focus();
	}, []);

	const handleInputChange = useCallback(
		(e) => {
			setInputState(e.target.value);
		},
		[inputState],
	);

	const handleSubmit = () => {
		postTweet(inputState);
		setInputState('');
	};

	return (
		<div className='flex gap-4 '>
			<img
				src={user?.avatar}
				alt='avatar'
				className='h-14 w-14 rounded-full'
			/>
			<TextInput
				ref={inputRef} //we pass the inputRef to the TextInput component
				// here we have another way to get the element we want, without
				// using useRef  👇🏼

				// ref={(input) => {
				// 	if (!input) return;
				// 	input.focus();
				// }}
				type='text'
				placeholder='Type some emojis!'
				className='w-full border-0 bg-transparent outline-none flex-1'
				onChange={handleInputChange}
				value={inputState}
				onSubmit={handleSubmit}
			/>
			<button
				className='bg-cyan-400 rounded-full px-2 py-0 h-9 w-24 text-black self-center cursor-pointer hover:bg-cyan-300 '
				onClick={handleSubmit}
				disabled={!inputState}
				style={{ cursor: !inputState ? 'not-allowed' : 'pointer' }}>
				Post
			</button>
		</div>
	);
}
