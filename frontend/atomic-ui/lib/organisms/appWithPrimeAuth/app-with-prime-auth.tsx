import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';

// @ts-ignore
const onRedirectCallback = (appState) => {
  window.history.replaceState(
    {},
    document.title,
    appState?.returnTo || window.location.pathname
  );
};

type Props = {
  env: {
    AUTH0_DOMAIN: string;
    AUTH0_CLIENT_ID: string;
  };
};

const AppWithAuth: React.FC<React.PropsWithChildren<Props>> = ({
  env,
  children,
}) => {
  return (
    <Auth0Provider
      domain={env.AUTH0_DOMAIN}
      clientId={env.AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://dev-8bain3sx.auth0.com/api/v2/',
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AppWithAuth;
