import { useState } from 'react';
import styles from './SingleProductModal.module.css';

const SingleProductModal = (props) => {
  console.log(props);
  const [heroImage, setHeroImage] = useState(props.product.images[0]);
  const [price, setPrice] = useState(
    Number(props.product.sizes[0].split(' ')[0]) * props.product.price
  );
  const [activeButton, setActiveButton] = useState(props.product.sizes[0]);

  const heroImageHandler = (ev) => {
    console.log(ev.target.src);
    setHeroImage(ev.target.src);
  };

  const images = props.product.images.map((image, index) => {
    return (
      <img
        onClick={heroImageHandler}
        className={styles.images}
        src={image}
        key={index}
        alt={`product${index}`}
      ></img>
    );
  });
  const setPriceHandler = (ev) => {
    console.log(ev.target.textContent.split(' '));
    setPrice(Number(ev.target.textContent.split(' ')[0]) * props.product.price);
    setActiveButton(ev.target.textContent)
  };

  const productSize = props.product.sizes.map((size, index) => (
    <button
      onClick={setPriceHandler}
      key={index}
      className={`${styles.btn} ${styles[activeButton === size && `active-btn`]}`}
    >
      {size}
    </button>
  ));

  return (
    <div className={styles.container}>
      <div className={styles['images-container']}>
        <img className={styles['hero-image']} src={heroImage} alt="hero" />
        {images}
      </div>
      <div className="text">
        <h2 className={styles.name}>{props.product.name}</h2>
        <h3 className={styles.prices}>
          Prices From:
          {props.product.sizes && props.product.sizes.length > 1 && (
            <>
              <span>
                £
                {Number(props.product.sizes[0].split(' ')[0]) *
                  props.product.price}
              </span>{' '}
              To:
              <span>
                £
                {Number(
                  props.product.sizes[props.product.sizes.length - 1].split(
                    ' '
                  )[0]
                ) * props.product.price}
              </span>
            </>
          )}
        </h3>
        <p className={styles.description}>{props.product.description}</p>
        {productSize}
        <h3 className={styles.price}>Price: £{price}</h3>
      </div>
    </div>
  );
};

export default SingleProductModal;
