import { NavLink } from 'react-router-dom';

const Footer = (props) => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li className="footer__menu-item">
            <NavLink
              className="footer__menu-link"
              to="/"
              activeClassName="active"
            >
              A jugar
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink
              className="footer__menu-link"
              to="/instructions"
              activeClassName="active"
            >
              ¿Cómo se juega?
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink
              className="footer__menu-link"
              to="/options"
              activeClassName="active"
            >
              Más opciones
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
