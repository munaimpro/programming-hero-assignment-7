import React from 'react';
import FooterLogo from '../../assets/logo-xl.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Twitter from '../../assets/twitter.png';

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className="container mx-auto">
                <footer className="footer block text-white pt-20 pb-10 mt-20 text-center">
                    <img className='mx-auto mb-4' src={FooterLogo} alt="Logo" />
                    <p className='mx-auto opacity-80 mb-6'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <nav className='mx-auto'>
                        <h6 className="w-full capitalize font-medium text-[20px] text-white mb-4">Social Links</h6>
                        <div className='flex gap-4'>
                            <a href="#" className="btn btn-circle bg-white hover:bg-gray-200 border-none">
                                <img src={Instagram} alt="Instagram" />
                            </a>

                            <a href="#" className="btn btn-circle bg-white hover:bg-gray-200 border-none">
                                <img src={Facebook} alt="Facebook" />
                            </a>

                            <a href="#" className="btn btn-circle bg-white hover:bg-gray-200 border-none">
                                <img src={Twitter} alt="Twitter" />
                            </a>
                        </div>
                    </nav>
                </footer>

                <div className='border-t border-[#1A8862] py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-white opacity-60'>
                    <aside>
                        <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
                    </aside>
                    <nav className="flex gap-6">
                        <a className="link link-hover text-sm">Privacy Policy</a>
                        <a className="link link-hover text-sm">Terms of Service</a>
                        <a className="link link-hover text-sm">Cookies</a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Footer;