import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';
export const useAuth = () => {
	const authObject = useContext(AuthContext);

	if (!authObject)
		throw new Error('useAuth must be used within an AuthProvider');

	return authObject;
};
