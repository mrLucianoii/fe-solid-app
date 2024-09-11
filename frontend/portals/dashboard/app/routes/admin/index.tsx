import React, { useState } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

function AdminIndex() {
  const [visible, setVisible] = useState(true);

  return <div className="card flex justify-content-center"></div>;
}

export default withAuthenticationRequired(AdminIndex);
