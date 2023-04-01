import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import LogoT from '../../assets/images/taha-logo.png'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faFileLines,
  faFileShield
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {

  const [showNav, setShowNav] = useState(false);

  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoT} alt='logo' />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
          <NavLink 
            exact="true"
            activeclassname="active"
            to="/"
            onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink 
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="resume-link"
            to="https://github.com/TrojanPunk/Resume/raw/main/Taha%20Habib%20resume.pdf"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faFileLines} color="#4d4d4e" />
          </NavLink>
          <FontAwesomeIcon 
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#ffd700"
            size="3x"
            className='close-icon' />
        </nav>
      <ul>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/taha-habib-548308209/'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://github.com/TrojanPunk'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default NavBar;