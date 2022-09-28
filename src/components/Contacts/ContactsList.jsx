import { ContactListItem } from 'components/ContactsListItem/ContactsListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

export const ContactList = ({ contacts }) => {
  const filter = useSelector(getFilter);

  const filtredContacts = () => {
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = filtredContacts();
  return (
    <List>
      {visibleContacts?.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </List>
  );
};
