import { Home } from 'lucide-react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div className='container max-w-md flex flex-col mx-auto min-h-screen items-center justify-center text-center'>
            <h1 className='text-8xl font-black text-[#244D3F] mb-5'>404</h1>
            <h2 className='text-2xl font-bold mb-5'>Page Not Found</h2>
            <p className='mb-5 text-[#64748B]'>Looks like this friendship link is broken. The page you're looking for doesn't exist or has been moved.</p>
            <Link to={'/'}>
                <button className='flex btn btn-lg capitalize text-base-100 bg-[#244D3F] font-bold'>
                    <Home size={20} />
                    <span>Back to home</span>
                </button>
            </Link>
        </div>
    );
};

export default NotFoundPage;