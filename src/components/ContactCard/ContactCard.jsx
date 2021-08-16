import React from 'react'
import user from '../../images/user.png'

const ContactCard = ({ contact, clickHandler }) => {
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{contact.name}</div>
        <div>{contact.email}</div>
      </div>
      <button
        className="trash alternate outline icon"
        style={{ color: 'red', marginTop: '7px' }}
        onClick={() => clickHandler(contact.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default ContactCard
