import { Outlet } from 'react-router-dom';

// components
import Menu from './Menu';
import Footer from './Footer';

// styles
import '../styles/Layout.scss';

const Layout = () => {
    return (
        <div className="layout">
            <Menu />

            <main className="layout-main">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;