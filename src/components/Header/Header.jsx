import { Link, NavLink } from "react-router-dom";
import accountLogo from "../../assets/svg/account-icon.svg";
import logo from "../../assets/svg/logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.headerLogo}>
          <img src={logo} alt="soldiers support logo" />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink}>Головна</NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} to="/fees">
                Збори
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} to="/about">
                Про нас
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} to="/contacts">
                Контакти
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.headerActions}>
          <div className={styles.actionContainer}>
            <a className={styles.action}>Вхід</a>
            <a className={styles.action}>Зареєструватися</a>
          </div>
          <img src={accountLogo} alt="account logo" className={styles.actionsImg}></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
