import { Navbar, Footer } from './components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex flex-col'>
        <Navbar />
            <main>
                <Outlet />
            </main>
        <Footer />
    </div>      

  )
}

export default Layout