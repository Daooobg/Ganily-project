import { Link } from 'react-router-dom';

import styles from './Product.module.css';
import { useState } from 'react';
import Modal from '../../UI/Modal';
import SingleProductModal from './SingleProductModal';

const Product = (props) => {
  const logos = props.data.logoDescription.map((item, index) => {
    return <span key={index}>{item}</span>;
  });
  const [overlay, setOverlay] = useState(false);

  const overlayHandler = () => {
    setOverlay((state) => !state);
  };

  return (
    <div className={styles.container} key={props.data._id}>
      <img className={styles.image} src={props.data.images[0]} alt="" />

      <div className={styles.div}>
        <h2 className={styles.name}>
          Name: <span>{props.data.name}</span>
        </h2>
        <p className={styles.meta}>Description: {props.data.description}</p>
      </div>

      <div className={styles.contains}>{logos}</div>
      {/* <Link to={`${props.data.product}/${props.data._id}`} className={styles.btn}> */}
      <button onClick={overlayHandler} className={styles.btn}>
        More details
      </button>
      {/* {overlay && (
        <div onClick={overlayHandler} className={styles.overlay}>
          <h1>{props.data.name}</h1>
        </div>
      )} */}
      {overlay && <Modal onClose={overlayHandler}>
        <SingleProductModal product={props.data} />
         </Modal>}
    </div>
  );
};

export default Product;
