import { useDeleteContactMutation } from 'redux/contactsSlice';

import {
  ListItem,
  UserBox,
  Btn,
  Avatar,
  DeleteIcon,
  ItemName,
  ItemNumber,
} from './ContactListItem.styled';

export const ContactListItem = ({ id, name, phone, avatar }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ListItem key={id}>
      <UserBox>
        <Avatar src={avatar} alt="Contact avatar" />
        <ItemName>{name}</ItemName>
      </UserBox>
      <ItemNumber>{phone.slice(0, 15)}</ItemNumber>
      <Btn type="button" onClick={() => deleteContact(id)}>
        <DeleteIcon />
      </Btn>
    </ListItem>
  );
};
