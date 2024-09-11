import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar } from 'antd';
import { BusinessName } from
import './profile-widget.scss';

const ProfileWidget = ({businessName}: { businessName: BusinessName}) => {
  const { user, isAuthenticated } = useAuth0();
  const [checked, setChecked] = useState(false);

  const handleOnChange = (e: any) => {
    setChecked(e.checked);
  };
  console.log({ user });
  return (
    isAuthenticated && (
      <div className="profile-widget">
        <Avatar src={user!.picture} shape="circle" size={64} />
        <h2>Welcome  { `${businessName} ` } Member!</h2>
        <h2>{user!.name}</h2>
        <p>{user!.email}</p>
        <>
          <Checkbox onChange={handleOnChange} />
          <label htmlFor="checkbox" className="p-checkbox-label">
            Subscribe to our newsletter
          </label>
        </>
      </div>
    )
  );
};

export default ProfileWidget;
