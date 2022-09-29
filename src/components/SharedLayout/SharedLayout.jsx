import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <aside>
        <nav>
        <NavLink to="/">Contacts</NavLink>
          <NavLink to="/AddContactForm">Add new contact</NavLink>
        </nav>
      </aside>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
