import { ContactList } from 'components/Contacts/ContactsList';
import { useFetchContactsQuery } from 'redux/contactsSlice';
import { Filter } from 'components/Filter/Filter';


export const ContactsPage = () => {
const { data: contacts } = useFetchContactsQuery();
    
    return (
        <section>
            <Filter/>
            <ContactList contacts={contacts} />
            </section>
    )
}
