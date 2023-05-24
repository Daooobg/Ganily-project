import { useEffect, useState } from 'react';

import styles from './Products.module.css';
import { getAllCakes } from '../../services/cakeServices';
import Product from './Product';

const Products = ({ data }) => {
  const result = data.products.map((item) => <Product data={item} key={item._id} />);
  return <div className={styles.products}>
    {data.products && result}
    {data.products && result}

    {data.products.length === 0 && <h1>There is no products</h1>}
    </div>;
};

export default Products;
