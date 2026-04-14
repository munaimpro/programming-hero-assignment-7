import React from 'react';
import FooterLogo from '../../assets/logo-xl.png';

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
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>

                            <a href="#" className="btn btn-circle bg-white hover:bg-gray-200 border-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>

                            <a href="#" className="btn btn-circle bg-white hover:bg-gray-200 border-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"></path>
                                </svg>
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