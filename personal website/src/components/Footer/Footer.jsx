import {useState} from 'react'
import './Footer.css'
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    const nowDate = new Date().toDateString();


  return (
    <div className='footer'>
      <p>Copyright<span><CopyrightIcon/></span> {nowDate} </p>
    </div>
  )
}

export default Footer
