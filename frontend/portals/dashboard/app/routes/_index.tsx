import { useEffect } from 'react';
import type { MetaFunction } from '@remix-run/node';
import useAdminAuth0 from '@/hooks/use-admin-auth0';
import { useNavigate } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix SPA' },
    { name: 'description', content: 'Welcome to Remix (SPA Mode)!' },
  ];
};

export default function Index(businessName: string) {
  const { isAuthenticated, loginWithRedirect, hasRole } = useAdminAuth0({businessName});
  const role = `${businessName}-admin`
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else if (!hasRole(role)) {
      navigate('/unauthorized');
    }
  }, [isAuthenticated, hasRole, loginWithRedirect, navigate]);

  if (!isAuthenticated || !hasRole(role)) {
    return <div>Loading...</div>;
  }
  if (isAuthenticated && hasRole(role)) {
    navigate('/admin');
  }
  return null;
}
