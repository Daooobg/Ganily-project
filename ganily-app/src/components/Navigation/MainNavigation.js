/* eslint-disable jsx-a11y/no-redundant-roles */
import style from './MainNavigation.module.css';
import { ReactComponent as GanilyLogo } from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <nav className={style.navigation}>
        <GanilyLogo className={style.navigation__logo} />
        <ul className={style.navigation__container} role="list">
          <li >
            <Link className={style.navigation__links}>Home</Link>
          </li>
          <li><Link className={style.navigation__links}>About Us</Link></li>
          <li><Link className={style.navigation__links}>Products </Link></li>
          <li><Link className={style.navigation__links}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
