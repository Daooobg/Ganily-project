/* eslint-disable jsx-a11y/no-redundant-roles */
import styles from './AllergenFreeSection.module.css';
import dairyImage from '../../assets/images/allergenImages/icons8-dairy-50.png';
import diabeticImage from '../../assets/images/allergenImages/icons8-diabetic-food-50.png';
import noGlutenImage from '../../assets/images/allergenImages/icons8-no-gluten-50.png';
import noSoyImage from '../../assets/images/allergenImages/icons8-no-soy-50.png';
import sugarFreeImage from '../../assets/images/allergenImages/icons8-sugar-free-50.png';
import veganImage from '../../assets/images/allergenImages/icons8-vegan-50.png';

const AllergenFreeSection = () => {
  return (
    <section className={styles.wrapper}>
      <ul className={styles.container} role="list">
        <li>
          <img src={noSoyImage} title="SOY FREE" alt="SOY FREE" />
        </li>
        <li>
          <img src={veganImage} title="VEGAN" alt="VEGAN" />
        </li>
        <li>
          <img src={sugarFreeImage} title="SUGAR FREE" alt="SUGAR FREE" />
        </li>
        <li>
          <img src={noGlutenImage} title="GLUTEN FREE" alt="GLUTEN FREE" />
        </li>
        <li>
          <img src={dairyImage} title="DAIRY FREE" alt="DAIRY FREE" />
        </li>
        <li>
          <img
            src={diabeticImage}
            title="DIABETIC FRIENDLY"
            alt="DIABETIC FRIENDLY"
          />
        </li>
      </ul>
    </section>
  );
};

export default AllergenFreeSection;
