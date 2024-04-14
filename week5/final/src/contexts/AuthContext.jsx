import React, { useState, createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				token,
				setToken,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
