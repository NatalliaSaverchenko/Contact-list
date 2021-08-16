import React from 'react'
import ContactCard from '../ContactCard/ContactCard'

const ContactList = ({ contacts, getContactId }) => {
  const deleteConactHandler = (id) => {
    getContactId(id)
  }
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteConactHandler}
        key={contact.id}
      />
    )
  })
  return <div className="ui celled list">{renderContactList}</div>
}

export default ContactList
