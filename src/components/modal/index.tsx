import React, { ReactNode } from 'react'
import './modal.css'
import { ModalSetting } from '../../styledComponents/modalSetting'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { closeModal, closeModalWhenClickOutside } from '../../utils/closeModal'

type Props = {
  children: ReactNode,
  onOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({children, onOpen}: Props) => {
  return (
    <ModalSetting onClick={(event)=> {closeModalWhenClickOutside(event, onOpen)}}>
      <div className="modal-container">
        <button
          aria-label="close"
          onClick={() => {closeModal(onOpen)}}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          <FontAwesomeIcon 
            className='closeBtn' 
            icon={faXmark} 
          />
        </button>
        <img className="modal-img" src="/src/assets/logo.webp" alt="" />
        <div>
          {children}
        </div>
      </div>
    </ModalSetting>
  );
}