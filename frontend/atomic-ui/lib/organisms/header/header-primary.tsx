import { Menu } from 'antd';
import { useNavigate } from '@remix-run/react';
import { Image } from 'antd';

import './styles.scss';
type NavBarProps = {
  logoSrc: string;
  admin?: boolean;
};

const HeaderPrimary = ({ logoSrc }: NavBarProps) => {
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

  // Render the Menubar with the defined items
  return (
    <div className="container-navbar">
      <div className="logo-container">
        <Image className={`logo-${businessName} logo`} src={logoSrc} />
      </div>
      <Menu className="main-nav" mode="horizontal" items={items} />
    </div>
  );
};

export default HeaderPrimary;
