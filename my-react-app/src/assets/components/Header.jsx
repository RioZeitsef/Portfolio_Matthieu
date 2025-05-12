import { Link } from "react-router";
import Styles from "../css/Header.module.css";
import logo from "../images/logo.webp";


const Header = () => {
    return (
        <header className={Styles.header}>
        <nav className={Styles.nav}>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <img src={logo} alt="Logo" className={Styles.logo} />
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            </ul>
        </nav>
        </header>
    );
    }

export default Header;