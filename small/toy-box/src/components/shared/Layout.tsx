import { Outlet } from "react-router-dom";
import Navigator from "./Navigator";
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
        <Header />
        <Navigator />
        <Outlet />
        <Footer />
    </>
  )
};

export default Layout;