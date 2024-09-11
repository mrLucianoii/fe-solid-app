import React from 'react';
import imagePath from '@/images/logo-yellow.png';
import { Image } from 'antd';

type LogoProps = {
  imageClassName: string;
};

const Logo = ({ imageClassName }: LogoProps) => {
  return (
    <>
      <Image className={imageClassName} src={imagePath} alt="logo" />
    </>
  );
};

export default Logo;
