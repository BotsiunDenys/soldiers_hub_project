import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/AuthSlice";
import { IoIosLogOut } from "react-icons/io";

import accountLogo from "../../assets/svg/account-icon.svg";
import logo from "../../assets/svg/logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.user);

  function logoutHandle() {
    dispatch(logout());
  }

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
          {isLogged ? (
            <div className={styles.user}>{username}</div>
          ) : (
            <div className={styles.actionContainer}>
              <Link className={styles.action} to="/login">
                Вхід
              </Link>
              <Link className={styles.action} to="/registration">
                Зареєструватися
              </Link>
            </div>
          )}
          <img src={accountLogo} alt="account logo" className={styles.actionsImg}></img>
          {isLogged && (
            <IoIosLogOut size={35} className={styles.logoutImg} onClick={logoutHandle} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
