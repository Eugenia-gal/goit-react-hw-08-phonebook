import React from 'react';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/phonebook/phonebook-slices';
import { getFilter } from 'redux/phonebook/phonebook-selectors';
import FilterContainer from './Filter.styled';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { AiOutlineSearch } from 'react-icons/ai';

const customId = shortid.generate();

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = event => dispatch(filterContacts(event.target.value));

  return (
    <FilterContainer>
      <Form.Label htmlFor="basic-url">Find Contact by Name</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          <AiOutlineSearch />
        </InputGroup.Text>
        <FormControl
          id={customId}
          value={value}
          onChange={onChange}
          name="filter"
          aria-describedby="basic-addon3"
        />
      </InputGroup>
    </FilterContainer>
  );
}
