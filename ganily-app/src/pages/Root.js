import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/Navigation/MainNavigation';
import Footer from '../components/Navigation/Footer';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
