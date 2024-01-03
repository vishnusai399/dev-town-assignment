// // LoginSignupForm.js
// import React, { useState } from 'react';
// import LoginForm from './LoginForm.js';
// import SignupForm from './SignupForm.js';
// import '../../styles/LoginSignupForm.css';

// const LoginSignupForm = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="login-signup-form">
//       {isLogin ? (
//         <LoginForm />
//       ) : (
//         <SignupForm />
//       )}
//       <div className="toggle-link">
//         <button onClick={toggleForm}>
//           {isLogin ? 'Not a user? Sign up' : 'Already a user? Login'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginSignupForm;

// LoginSignupForm.js
import React, { useState } from 'react';
import LoginForm from './LoginForm.js';
import SignupForm from './SignupForm.js';
import '../../styles/LoginSignupForm.css';

const LoginSignupForm = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    // Assume some login logic here
    // If login is successful, call the onLogin callback
    onLogin();
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup-form">
      {isLogin ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <SignupForm />
      )}
      <div className="toggle-link">
        <button onClick={toggleForm}>
          {isLogin ? 'Not a user? Sign up' : 'Already a user? Login'}
        </button>
      </div>
    </div>
  );
};

export default LoginSignupForm;
