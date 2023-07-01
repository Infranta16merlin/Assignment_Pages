import { FaBars } from 'react-icons/fa';
import { links, social } from './data';

const Navbar = () => {
  
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
            <h2>App Title</h2>
          <button className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon,data } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon} {data}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;