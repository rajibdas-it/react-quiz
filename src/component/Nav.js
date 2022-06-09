import logo from "../component/Assets/images/logo-bg.png";
import Account from "./Account";
import classes from "../component/Styles/Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Rajib Das</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
