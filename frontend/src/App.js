import React, { useState } from 'react';
import LoginSignupForm from '../src/components/pages/LoginSignupForm';
import MobileList from './components/mobiles/index.js';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  return (
    <div className="app">
      {isLoggedIn ? (
        <MobileList />
      ) : (
        <LoginSignupForm onLogin={handleLogin} />
      )}
    </div>
  );
}
export default App;
