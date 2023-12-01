import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import logo from "../../assets/svg/logo.svg";
import mail from "../../assets/svg/mail.svg";
import phone from "../../assets/svg/phone.svg";
import telegram from "../../assets/svg/telegram.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <Link className={styles.footerLogo}>
              <img src={logo} alt="soldiers support logo" />
            </Link>
            <h3>Разом ми сила!</h3>
          </div>
          <div className={styles.listContainer}>
            <h4 className={styles.footerTitle}>Меню</h4>
            <ul className={styles.footerList}>
              <li className={styles.footerItem}>
                <Link className={styles.footerLink}>Головна</Link>
              </li>
              <li className={styles.footerItem}>
                <Link className={styles.footerLink} to="/fees">
                  Збори
                </Link>
              </li>
            </ul>
            <ul className={styles.footerList}>
              <li className={styles.footerItem}>
                <Link className={styles.footerLink} to="/about">
                  Про нас
                </Link>
              </li>
              <li className={styles.footerItem}>
                <Link className={styles.footerLink} to="/contacts">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerMail}>
            <h4 className={styles.mailTitle}>Напишіть нам</h4>
            <div className={styles.linkContainer}>
              <a href="mailto:soldierssupport@gmail.com">soldierssupport@gmail.com</a>
              <div className={styles.linkImg}>
                <img src={mail} />
              </div>
            </div>
            <div className={styles.linkContainer}>
              <p>@Soldiers’Support</p>
              <div className={styles.linkImg}>
                <img src={telegram} />
              </div>
            </div>
            <div className={styles.linkContainer}>
              <p>+380966127710</p>
              <div className={styles.linkImg}>
                <img src={phone} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <div className={styles.copyrightContainer}>
          <p className={styles.copyrightContent}>SoldiersSupport © 2023 Усі права захищено.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
