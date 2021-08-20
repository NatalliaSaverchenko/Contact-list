import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ModalComponent } from '../../components/modal/modals'
import { LOCAL_STORAGE_KEY } from '../../constants/constants'
import MainModalComponent from '../../components/MainModalComponent/MainModalComponent'

const ContactInfo = ({
  match: {
    params: { id },
  },
}) => {
  const [contactInfo, setContactInfo] = useState(null)
  const [isEdit, setIsEdit] = useState(false)
  const [isAdd, setAdd] = useState(false)
  const [isDelete, setDelete] = useState(false)
  const [newInput, setNewInput] = useState([])
  const [keyDelete, setKeyDelete] = useState(null)

  useEffect(() => {
    if (contactInfo) {
      const contacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      const index = contacts.findIndex((value) => {
        return value.id === contactInfo.id
      })
      if (index !== -1) {
        contacts[index] = contactInfo
      }
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
    }
  }, [contactInfo])

  const edit = () => {
    setIsEdit(!isEdit)
  }
  const save = () => {
    setContactInfo((prev) => {
      return { ...prev, ...newInput }
    })
    setIsEdit(!isEdit)
  }
  const deleteContact = (key) => {
    setKeyDelete(key)
    setDelete(true)
  }
  const onChange = (e, key) => {
    setNewInput((prev) => {
      return { ...prev, [key]: e.target.value }
    })
  }

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    const contact = contacts.filter((contact) => contact.id === id)
    if (contact.length) {
      setContactInfo(contact[0])
    }
  }, [id])

  const addField = (e) => {
    console.log(e)
    const key = e.target?.elements?.name?.value?.trim()
    const value = e.target?.elements?.value?.value?.trim()
    let i = {}
    setContactInfo((prev) => {
      i = { ...prev }
      i[key] = value
      return i
    })

    const contacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    const index = contacts.findIndex((value) => {
      return value.id === i.id
    })
    if (index !== -1) {
      contacts[index] = i
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }

  if (!contactInfo) {
    return <>Загрузка</>
  }
  return (
    <>
      <Link to={'/'}>Список контактов</Link>
      <ul>
        {Object.keys(contactInfo).map((key) => {
          return (
            <li style={{ display: key === 'id' ? 'none' : 'block' }} key={key}>
              {isEdit ? (
                <div>
                  <label htmlFor={key}>{key}</label>
                  <input
                    onChange={(e) => onChange(e, key)}
                    type="text"
                    id={key}
                    defaultValue={contactInfo[key]}
                  />
                </div>
              ) : (
                <div>
                  <span>{key}:</span>
                  <span>{contactInfo[key]}</span>
                  <button
                    onClick={() => {
                      deleteContact(key)
                    }}
                  >
                    Удалить
                  </button>
                </div>
              )}
            </li>
          )
        })}
      </ul>
      <button onClick={!isEdit ? edit : save}>
        {isEdit ? 'Сохранить' : 'Редактировать'}
      </button>
      {!isAdd && (
        <button
          onClick={() => {
            setAdd(true)
          }}
        >
          Добавить поле
        </button>
      )}
      {isAdd && (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setAdd(false)
              addField(e)
            }}
          >
            <input placeholder="new key" name="name" />
            <input placeholder="new value" name="value" />
            <button type="submit">Добавить</button>
          </form>
        </div>
      )}
      {isDelete && (
        <ModalComponent>
          <MainModalComponent
            onSuccess={() => {
              const i = { ...contactInfo }
              delete i[keyDelete]
              setContactInfo(i)
              if (i) {
                const contacts = JSON.parse(
                  localStorage.getItem(LOCAL_STORAGE_KEY)
                )
                const index = contacts.findIndex((value) => {
                  return value.id === i.id
                })
                if (index !== -1) {
                  contacts[index] = i
                }
                localStorage.setItem(
                  LOCAL_STORAGE_KEY,
                  JSON.stringify(contacts)
                )
              }
              setDelete(false)
            }}
            onCancel={() => {
              setKeyDelete(null)
              setDelete(false)
            }}
          ></MainModalComponent>
        </ModalComponent>
      )}
    </>
  )
}
export default ContactInfo
