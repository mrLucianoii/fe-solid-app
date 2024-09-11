import React, { ReactNode } from 'react';
import './styles.scss';

interface AppBodyProps {
  children: ReactNode;
}

const LayoutCenter: React.FC<AppBodyProps> = ({ children }) => {
  return (
    <div className="layout-center">
      <div className="centered-child">{children}</div>
    </div>
  );
};

export default LayoutCenter;
