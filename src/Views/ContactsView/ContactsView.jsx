import React from 'react';
import ContactForm from 'Components/Form';
import ContactList from 'Components/ContactList';
import Filter from 'Components/Filter';
import { Wrapper, Invitation, SideBar } from './ContactsView.styled';

function ContactsView() {
  return (
    <Wrapper>
      <div>
        <Invitation>Add New Contact</Invitation>
        <ContactForm />
      </div>
      <div>
        <Invitation>Contacts</Invitation>
        <Filter />
        <ContactList />
      </div>
    </Wrapper>
  );
}

export default ContactsView;
