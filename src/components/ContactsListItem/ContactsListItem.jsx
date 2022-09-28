
import { useDeleteContactMutation } from 'redux/contactsSlice';


import {  ListItem, ListItemText, Btn } from './ContactListItem.styled';


export const ContactListItem = ({id,name,phone,avatar}) => {
  const [deleteContact] = useDeleteContactMutation();

  
  return (
    <ListItem key={id}>
      <ListItemText>
        <b>{name}</b> : {phone}
      </ListItemText>
      <Btn type="button" onClick={() => deleteContact(id)}>
        Delete
      </Btn>
    </ListItem>
  );
};

