import React from 'react'
import '../App.css'
import { SidebarData } from './SidebarData'

export function Sidebar () {
  return (
    <div className='sidebar'>
      <ul className='list'>
        {SidebarData.map((val, key) => {
          return (
            <li className='list_button' key={key} onClick={() => { window.location.pathname = val.link }}>
              {' '}
              <div>{val.icon}</div>{' '}
              <div>
                {val.title}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
