import React from 'react';

const Hero = () => {
    return (
        <div className='container mx-auto text-center mt-20 mb-10 space-y-5'>
            <h2 className='text-[#1F2937] text-5xl font-bold'>Friends to keep close in your life</h2>
            <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <button className='btn btn-neutral shadow-0 rounded-0 text-base-100 bg-[#244D3F] border-[#244D3F]'>+ Add a Friend</button>
        </div>
    );
};

export default Hero;