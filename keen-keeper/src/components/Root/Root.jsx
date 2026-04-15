import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>

            {/* Toast message container */}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;