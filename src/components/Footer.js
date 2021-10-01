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
              title="jugar"
              exact
              activeClassName="active"
            >
              A jugar
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink
              className="footer__menu-link"
              to="/instructions"
              title="instrucciones"
              activeClassName="active"
            >
              ¿Cómo se juega?
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink
              className="footer__menu-link"
              to="/options"
              title="opciones"
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
