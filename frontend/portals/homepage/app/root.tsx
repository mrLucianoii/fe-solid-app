import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import {
  AppWithPrimeAuth as Application,
  HeaderPrimary,
} from '@atomic-ui/organisms';
// import "./index.css";
import './global.scss';
import imagePath from '@atomic-ui/images/logo-yellow.png';
import AppBody from '@/layout/app-body/app-body';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Application
        env={{
          AUTH0_DOMAIN: process.env.AUTH0_DOMAIN!,
          AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID!,
        }}
      >
        <HeaderPrimary logoSrc={imagePath} />
        <AppBody>
          <Outlet />
        </AppBody>
      </Application>
    </>
  );
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
