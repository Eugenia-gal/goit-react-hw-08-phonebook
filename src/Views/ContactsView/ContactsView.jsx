import React from 'react';
import Form from 'Components/Form';
import ContactList from 'Components/ContactList';
import Filter from 'Components/Filter';

function ContactsView() {
  return (
    <>
      <h1>Телефонная книга</h1>
      <Form />
      <h2>Контакты</h2>
      <Filter />
      <ContactList />
    </>
  );
}

export default ContactsView;
