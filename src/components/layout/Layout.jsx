import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

const Layout = () => {
  return (
    <div className="layout min-h-screen flex flex-col">
      <Header />
      <main className="main-content flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
