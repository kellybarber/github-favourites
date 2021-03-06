import React from 'react'
import { button, icon } from './FavouritesButton.css'

export default ({ onToggleMenu }) => (
  <button className={button} onClick={onToggleMenu}>
    <svg className={icon} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>heart</title>
      <path  d="M21.5 3.9v0c-1.2-1.2-2.8-1.9-4.5-1.9v0c-1.7 0-3.4 0.7-4.6 1.9 0 0 0 0 0 0l-0.4 0.4-0.4-0.4c-1.2-1.2-2.8-1.9-4.6-1.9-1.7 0-3.3 0.7-4.5 1.9s-2 2.9-2 4.6 0.7 3.4 1.9 4.6l8.8 8.8c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l8.8-8.8c2.7-2.5 2.7-6.7 0.1-9.2zM20.1 11.7l-8.1 8.1-8.1-8.1c-1.8-1.8-1.8-4.6 0-6.4 0.8-0.9 2-1.3 3.1-1.3 1.2 0 2.3 0.4 3.2 1.3l1.1 1.1c0.4 0.4 1 0.4 1.4 0l1-1.1c0 0 0 0 0 0 0.9-0.8 2-1.3 3.3-1.3 0 0 0 0 0 0 1.2 0 2.3 0.5 3.2 1.3v0c0.8 0.9 1.3 2 1.3 3.2s-0.5 2.3-1.4 3.2z"></path>
    </svg>
  </button>
)