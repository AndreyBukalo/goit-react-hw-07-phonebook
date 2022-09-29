import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { UserForm } from './ContactsForm/Form';
import { ContactList } from './Contacts/ContactsList';

import { Box } from './Box';

import { Toaster } from 'react-hot-toast';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ContactsPage } from 'Pages/Contacts';
import { AddContactPage } from 'Pages/AddContactForm';

export const App = () => {

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ContactsPage />} />
        </Route>
        <Route path='/AddContactForm"' element={<AddContactPage />} />
      </Routes>
    </>
  );
};


        
          // <UserForm />
       