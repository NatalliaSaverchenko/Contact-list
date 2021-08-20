import React from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user.png'
// import { NavLink } from 'react-router-dom'
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
        style={{ color: 'green', marginTop: '7px' }}
      >
        <Link to={`/contactinfo/${contact.id}`}>view</Link>
      </button>
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
