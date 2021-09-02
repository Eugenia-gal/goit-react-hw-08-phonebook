import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { deleteContact } from 'redux/phonebook/phonebook-operations';
import ListContactEl from './ContactItem.styled';
import Button from 'react-bootstrap/Button';
import { BsTrash } from 'react-icons/bs';

function ContactItem({ contact }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    setIsDeleting(true);
    dispatch(deleteContact(contact.id));
  };
  return (
    <ListContactEl>
      <span>
        {contact.name}: {contact.number}
      </span>
      <Button type="button" variant="warning" onClick={handleDelete}>
        {isDeleting ? (
          <Loader type="Bars" color="#000000" height={12} width={12} />
        ) : (
          <BsTrash size="1.5em" />
        )}
      </Button>
    </ListContactEl>
  );
}

export default ContactItem;
