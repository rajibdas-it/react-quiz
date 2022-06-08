import logo from "../component/Assets/images/logo-bg.png";
import Account from "./Account";
import classes from "../component/Styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Rajib Das</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
