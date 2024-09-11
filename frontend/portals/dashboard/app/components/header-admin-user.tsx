import { AuthLogBtns } from '@atomic-ui/molecules';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar } from 'antd';
import './header-admin-user.scss';
const HeaderAdminUser = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="flex align-items-center gap-2">
      {isAuthenticated && (
        <>
          <div>Welcome, {user!.name}</div>
          <div>
            <Avatar
              src={user!.picture}
              shape="circle"
              size={64}
              className="p-mr-2"
            />
          </div>
        </>
      )}
      <AuthLogBtns admin />
    </div>
  );
};

export default HeaderAdminUser;
