import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <p>&copy; 2023 All Rights Reserved | Ganily</p>
        <div className={style['footer__social-links']}>
          <p>Find us on:</p>
          <Link className={style.links}>
            <BsFacebook />
          </Link>
          <Link className={style.links}>
            <BsInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
