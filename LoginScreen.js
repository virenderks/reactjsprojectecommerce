 // LoginScreen.js
import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      // Make the login request and obtain the token
      const token = 'yourTokenValue';

      // Store the token in the context
      login(token);

      // Redirect to another page or update UI as needed
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      {/* Your login form JSX */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginScreen;
