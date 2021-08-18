import React, { useState, useEffect } from 'react'
import AddContact from '../../components/AddContact/AddContact'
import ContactList from '../../components/ContactList/ContactList'
import { LOCAL_STORAGE_KEY } from '../../constants/constants'
//const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
function ListOfContacts() {
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    // { id: uuid(), ...contact }
    setContacts([...contacts, contact])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })

    setContacts(newContactList)
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retriveContacts) setContacts(retriveContacts)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className="ui container">
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  )
}

export default ListOfContacts
