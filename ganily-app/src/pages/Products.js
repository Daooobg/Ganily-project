import { useEffect, useState } from 'react';
import Products from '../components/Products/Products';
import ProductsNavigation from '../components/Products/ProductsNavigation';
import { getAllCakesByType } from '../services/cakeServices';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [types, setTypes] = useState();

  useEffect(() => {
    getAllCakesByType(types)
      .then((data) => {
        setProducts(data);
        setError(false);
      })
      .catch(() => setError(true));
  }, [types]);

  useEffect(() => {
    getAllCakesByType('all')
      .then((data) => {
        setProducts(data);
        setError(false);
      })
      .catch(() => setError(true));
  }, []);
  return (
    <main>
      <section>
        <ProductsNavigation setTypes={setTypes} />
        <Products data={{ products, error }} />
      </section>
    </main>
  );
};
export default ProductsPage;
