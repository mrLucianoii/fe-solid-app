import { useAuth0 } from '@auth0/auth0-react';

const useAdminAuth0 = ({ businessDomain }: { businessDomain: string }) => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  console.log({ isAuthenticated, user, loginWithRedirect });
  const hasRole = (role: string) => {
    const namespace = `https://admin.${businessDomain} .com/`;
    return (
      isAuthenticated &&
      user &&
      user[`${namespace}roles`] &&
      user[`${namespace}roles`].includes(role)
    );
  };

  return { isAuthenticated, user, loginWithRedirect, hasRole };
};

export default useAdminAuth0;
