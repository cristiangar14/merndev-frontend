import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';


const navLinks = [
  {
    name: 'Inicio',
    path: '/home'
  },
  {
    name: 'Buscar dev',
    path: '/developers'
  },
  {
    name: 'Contact',
    path: '/contact'
  },
  {
    name: 'Services',
    path: '/services'
  },
]

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt='logo'/>
          </div>
          <nav className='navigation'>
            <ul className='menu flex items-center gap[2.7rem]'>
              {
                navLinks.map(link => (
                  <li key={link.name}>
                    <NavLink>
                    <Link to={link.path}>{link.name}</Link>

                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>

    </header>
  )
}

export default Header