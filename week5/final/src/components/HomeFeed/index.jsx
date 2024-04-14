import React from 'react';
import styled from 'styled-components';
import LoginForm from '../LoginForm/index';
import CreatePostForm from '../CreatePostForm/index';
import LoadingSpinner from '../LoadingSpinner/index';
import { useAuth } from '../../hooks/useAuth';
import Tweet from '../Tweet/index';

const Feed = styled.div`
	max-width: 42rem;
	width: 100%;
	border-left: 1px solid #475569;
	border-right: 1px solid #475569;
	max-width: 672px;
	display: flex;
	flex-direction: column;
`;

const HomeFeed = ({ post, error, tweets }) => {
	const { user } = useAuth();

	return (
		<Feed>
			<div className='border-b border-slate-400 p-4'>
				{user ? <CreatePostForm postTweet={post} /> : <LoginForm />}
			</div>
			{error ? (
				<div className='bg-red-500 p-4 text-white'>{error}</div>
			) : null}
			{tweets.length ? (
				<div className='flex flex-col overflow-y-scroll grow'>
					{tweets.map((tweet) => (
						<Tweet key={tweet.id} tweet={tweet} />
					))}
				</div>
			) : (
				<LoadingSpinner />
			)}
		</Feed>
	);
};

export default HomeFeed;
