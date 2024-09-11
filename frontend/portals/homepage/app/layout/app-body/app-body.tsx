import React, { ReactNode } from 'react';
import './app-body.scss';

interface AppBodyProps {
  children: ReactNode;
}

const AppBody: React.FC<AppBodyProps> = ({ children }) => {
  return <div className="app-body">{children}</div>;
};

export default AppBody;
