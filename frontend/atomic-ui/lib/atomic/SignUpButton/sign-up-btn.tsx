import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';

const SignUpButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = () => {
    loginWithRedirect({
      // @ts-ignore
      screen_hint: 'signup',
    });
  };

  return (
    <Button onClick={handleSignUp} className="signup-button">
      Sign Up
    </Button>
  );
};

export default SignUpButton;
