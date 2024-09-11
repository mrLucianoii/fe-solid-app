import { useNavigate } from '@remix-run/react';
import Logo from '@/atomic/logo/logo';

import './styles-secondary.scss';
import { Menu } from 'antd';
type NavBarProps = {
  logoSrc: string;
  admin?: boolean;
  EndComponent?: React.FC;
};

const HeaderSecondary = ({ logoSrc, EndComponent }: NavBarProps) => {
  const navigate = useNavigate();

  // Define menu items
  const items = [
    {
      label: 'Home',
      className: 'home',
      key: 'home',
    },
    {
      label: 'Products',
      key: 'products',
    },
    {
      label: 'About Us',
      key: 'about',
    },
    // Add more items as needed
  ];
  const LogoWrapper = ({ businessName }) => {
    return (
      <div className="logo-container">
        <Logo imageClassName={`logo - ${businessName} }`} />
        <p>Admin Dashboard</p>
      </div>
    );
  };

  // Render the Menubar with the defined items
  return (
    <div className="container-header-secondary">
      <Menu className="main-nav" mode="horizontal" items={items} />
    </div>
  );
};

export default HeaderSecondary;
