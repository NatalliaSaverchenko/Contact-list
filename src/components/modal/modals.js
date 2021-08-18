import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
const modalRoot = document.getElementById('modal-root')

export const ModalComponent = (props) => {
  const [el] = useState(document.createElement('div'))
  useEffect(() => {
    modalRoot.appendChild(el)
    return () => {
      modalRoot.removeChild(el)
    }
  }, [el])
  return ReactDOM.createPortal(props.children, el)
}
