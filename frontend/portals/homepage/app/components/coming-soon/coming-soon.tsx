import React from 'react';
import { Card } from 'antd';

import { Image } from 'antd';
import { AuthLogBtns } from '@atomic-ui/molecules';
import './coming-soon.scss';
import logoPath from '@atomic-ui/images/1x/coming-soon.png';
import ProfileWidget from '@atomic-ui/organisms/profile-widget/profile-widget';

export default function ComingSoon() {
  return (
    <div className="coming-soon card flex justify-content-center">
      <Card title="Octonions Ai" className="coming-card md:w-25rem">
        <Image className="image-png" alt="Card" src={logoPath} />
        <p className="m-0">
          We are currently working on our website. Please check back soon.
        </p>
        <ProfileWidget />
        <AuthLogBtns />
      </Card>
    </div>
  );
}
