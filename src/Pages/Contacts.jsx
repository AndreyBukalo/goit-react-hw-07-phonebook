import { ContactList } from 'components/Contacts/ContactsList';
import { useFetchContactsQuery } from 'redux/contactsSlice';
import { Filter } from 'components/Filter/Filter';
import {Header} from 'components/PageStyled/ContactsPageStyle'

export const ContactsPage = () => {
const { data: contacts } = useFetchContactsQuery();
    
    return (
        <section>
            <Filter/>
            <ContactList contacts={contacts} />
            </section>
    )
}
