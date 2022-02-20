import './topbar.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
export default function Topbar({menuOpen , setMenuOpen}) {
  return (
    <div className= {'topbar ' + (menuOpen && 'active') } >
      <div className='wrapper'>
        <div className='left'>
          {/* <a href='#intro' className='logo'> genius.</a> */}
          <div className="itemContainer">
            <EmailIcon className='icon' />
            <span>nicolasmacenco@gmail.com</span>
          </div>
          <div className="itemContainer">
            <span> <a href="https://www.linkedin.com/in/nicolas-macenco/" ><LinkedInIcon className='icon' /></a></span>
          </div>
          <div className="itemContainer">
            <span> <a href="https://github.com/nmacenco" ><GitHubIcon className='icon' /></a></span>
          </div>
          <div className="itemContainer">
            <span> <a href="/assets/MacencoNicolas-CV..pdf" download={'MacencoNicolas-CV..pdf'}><PictureAsPdfIcon className='icon' /></a></span>
          </div>
        </div>
        <div className='right'>
          <div className="hamburger" onClick={() => {setMenuOpen(!menuOpen)}}>
            <span className='line1' ></span>
            <span className='line2' ></span>
            <span className='line3' ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
