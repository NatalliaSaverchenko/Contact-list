import React from 'react'
import { v4 as uuid } from 'uuid'

class AddContact extends React.Component {
  state = {
    id: uuid(),
    name: '',
    email: '',
  }

  add = (e) => {
    e.preventDefault()
    if (this.state.name === '' || this.state.email === '') {
      alert('ALl the fields are mandatory!')
      return
    }
    this.props.addContactHandler(this.state)
    this.setState({ id: uuid(), name: '', email: '' })
  }
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    )
  }
}
export default AddContact
// import { useState } from 'react'
// const AddContact = ({ addContactHandler }) => {
//   const [input, setInput] = useState([
//     {
//       id: uuid(),
//       name: '',
//       email: '',
//     },
//   ])
//   const add = (e) => {
//     e.preventDefault()
//     if (input.name === '' || input.email === '') {
//       alert('ALl the fields are mandatory!')
//       return
//     }
//     addContactHandler(input)
//     setInput('')
//   }
//   return (
//     <div className="ui main">
//       <h2>Add Contact</h2>
//       <form className="ui form" onSubmit={add}>
//         <div className="field">
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={input.name}
//             onChange={(e) => setInput((input.name = e.target.value))}
//           />
//         </div>
//         <div className="field">
//           <label>Email</label>
//           <input
//             type="text"
//             name="email"
//             placeholder="Email"
//             value={input.email}
//             onChange={(e) => setInput((input.email = e.target.value))}
//           />
//         </div>
//         <button className="ui button blue">Add</button>
//       </form>
//     </div>
//   )
// }

// export default AddContact
