import React from 'react'
import { BellFilled } from '@ant-design/icons';
import './header.css'
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};


function Header() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className='nav'>
      <p className='nav-head'>{isAuthenticated ? `${user.name} Dashboard` : 'Dashboard'}</p>
      <section>
        <input
          type="text"
          placeholder="Search here"
        />
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        <BellFilled />
      </section>
    </div>
  )
}

export default Header;
