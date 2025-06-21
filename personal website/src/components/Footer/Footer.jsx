import './Footer.css'
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  const nowDate = new Date().toDateString();


  return (
    <div className='footer'>
      <p><span>Copyright</span><span><CopyrightIcon /></span> <span>{nowDate}</span> </p>
    </div>
  )
}

export default Footer
