import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';
import { SignUpButton } from '@/atomic';

type Props = {
  signup?: boolean;
  admin?: boolean;
};
const AuthLogBtns = ({ signup, admin }: Props) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const isSignup = signup || false;
  const isAdmin = admin || false;
  return (
    <>
      {isAuthenticated ? (
        <Button type="default" onClick={() => logout()}>
          Log Out
        </Button>
      ) : (
        <>
          {isSignup && <SignUpButton />}
          {!isAdmin && (
            <Button
              type={isSignup ? 'default' : 'primary'}
              // @ts-ignore
              onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
              style={{ marginLeft: '0.5em' }}
            >
              Admin Login
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default AuthLogBtns;
