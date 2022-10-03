import { useNavigate } from 'react-router-dom';
import { FormStyle, Label, Input, Btn, Header } from './Form.styled';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsSlice';
import toast from 'react-hot-toast';

export const UserForm = () => {
  const navigate = useNavigate();
  const [createContact, { isLoading: isAdding }] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value.toString();
    if (
      contacts?.find(cont => cont.name.toLowerCase() === name.toLowerCase())
    ) {
      return toast.error(`${name} is already in contacts`);
    }
    if (!isAdding) {
      createContact({ name, number });
      navigate('/', { replace: true });
      form.reset();
      return toast.success(`${name} adding to your contacts...`);
    }
  };

  return (
    <>
      <Header>Please enter contact details</Header>
      <FormStyle onSubmit={handleSubmit}>
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <br />
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Btn type="Submit">Add to Contacts</Btn>
      </FormStyle>
    </>
  );
};
