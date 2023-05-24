/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState } from 'react';
import styles from './ProductsNavigation.module.css';
import { getAllCakes } from '../../services/cakeServices';

const ProductsNavigation = (props) => {
  const [type, setType] = useState('');

  const changeTypesHandler = (ev) => {
    // console.log(ev.target.name);
    // if (ev.target.name === 'all') {

    //   console.log(props);
    props.setTypes(ev.target.name);
    // }
  };

  return (
    <header>
      <nav className={styles.navigation}>
        <ul role="list" className={styles.container}>
          <li>
            <button className={styles['main-buttons']}>Desserts</button>
          </li>
          <li>
            <div className={styles.dropdown}>
              <button className={styles['main-buttons']}>Cakes</button>
              <div className={styles.dropdown__content}>
                <button
                  name="all"
                  onClick={changeTypesHandler}
                  className={styles.dropdown__buttons}
                >
                  All cakes
                </button>
                <button
                  name="fruit"
                  onClick={changeTypesHandler}
                  className={styles.dropdown__buttons}
                >
                  Fruit cakes
                </button>
                <button
                  name="vegetable"
                  onClick={changeTypesHandler}
                  className={styles.dropdown__buttons}
                >
                  Vegetable cakes
                </button>
                <button
                  name="mixed"
                  onClick={changeTypesHandler}
                  className={styles.dropdown__buttons}
                >
                  Mixed Cakes
                </button>
                <button
                  name="chocolate"
                  onClick={changeTypesHandler}
                  className={styles.dropdown__buttons}
                >
                  Chocolate Cakes
                </button>
                {/*  */}
                <button
                  name="dairy-free"
                  onClick={changeTypesHandler}
                  className={styles.dropdown__buttons}
                >
                  Dairy Free Cakes
                </button>
                <button
                  name="keto"
                  onClick={changeTypesHandler}
                  className={styles.dropdown__buttons}
                >
                  Keto Cakes
                </button>
                <button
                  name="nut-free"
                  onClick={changeTypesHandler}
                  className={styles.dropdown__buttons}
                >
                  Nut Free Cakes
                </button>
                <button
                  name="probiotic"
                  onClick={changeTypesHandler}
                  className={styles.dropdown__buttons}
                >
                  Probiotic Cakes
                </button>
                <button
                  name="kids"
                  onClick={changeTypesHandler}
                  className={styles.dropdown__buttons}
                >
                  Kids Cakes
                </button>
              </div>
            </div>
          </li>
          <li>
            <button className={styles['main-buttons']}>Ice creams</button>
          </li>
          <li>
            <button className={styles['main-buttons']}>Candies</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ProductsNavigation;
