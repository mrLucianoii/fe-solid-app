import React from 'react';
import { AuthLogBtns } from '@atomic-ui/molecules';
import { Card } from 'antd';
import LayoutCenter from '@/layout/layout-center/layout-center';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from '@remix-run/react';

const Login = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate('/admin');
  }
  return (
    <LayoutCenter>
      <Card title="Restricted">
        <h1>Octonions Ai  Login</h1>
        <p>Authorized Personal Only</p>
        <AuthLogBtns />
      </Card>
    </LayoutCenter>
  );
};

export default Login;
