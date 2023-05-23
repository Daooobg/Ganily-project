/* eslint-disable jsx-a11y/no-redundant-roles */
import styles from './AboutProductsSection.module.css';
import cakeImage from '../../assets/images/handcrafted-image.jpg';

const AboutProductsSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.image} src={cakeImage} alt="hand craft cakeS" />
        <h2>About our products</h2>
        <ul role="list">
          <li>
            <p>
              Our raw temptations are made without flour, milk, eggs, sugar,
              butter or preservatives.
            </p>
          </li>
          <li>
            <p>
              All products are handmade, using natural organic ingredients like
              raw nuts, seeds, coconut and cacao oil, fruits and vegetables,
              natural sweeteners (agave, maple syrup, dates, stevia,
              erythritol), and superfoods.
            </p>
          </li>
          <li>
            <p>
              One of our secrets for best results is soaking the nuts, which
              helps minimize nutritional inhibitors and toxic substances left in
              the water.
            </p>
          </li>
          <li>
            <p>
              We don't bake any of our products because we went to keep all
              nutrients intact, as they are not exposed to heat.
            </p>
          </li>
          <li>
            <p>
              Our products can be stored in the refrigerator for up to five days
              or in the freezer for up to two mounts.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutProductsSection;
