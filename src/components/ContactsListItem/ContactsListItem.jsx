
import { useDeleteContactMutation } from 'redux/contactsSlice';


import {
  ListItem,
  ListItemText,
  Btn,
  Avatar,
  ItemName,
  ItemNumber,
} from './ContactListItem.styled';


export const ContactListItem = ({id,name,phone,avatar}) => {
  const [deleteContact] = useDeleteContactMutation();

  
  return (
    <ListItem key={id}>
      <Avatar src={avatar} alt="Contact avatar" />
      <ListItemText>
        <ItemName>{name}</ItemName>
        <ItemNumber>{phone.slice(0, 15)}</ItemNumber>
      </ListItemText>
      <ItemNumber>{phone.slice(0, 15)}</ItemNumber>
      <Btn type="button" onClick={() => deleteContact(id)}>
        Delete
      </Btn>
    </ListItem>
  );
};

