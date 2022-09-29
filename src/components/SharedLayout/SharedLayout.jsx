import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, SideBar, LinkNav } from './SharedLayoutStyled';

export const SharedLayout = () => {
  return (
    <Container>
      <SideBar>
        <nav>
          <LinkNav to="/contacts">Contacts</LinkNav>
          <LinkNav to="/AddContactForm">Add Contact</LinkNav>
        </nav>
      </SideBar>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
