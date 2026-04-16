import React from 'react';

const Stats = () => {
    return (
        <div>
            <div className='container mx-auto grid gap-6 grid-cols-1 lg:grid-cols-4'>
                {/* Total Friends */}
                <div className='card bg-base-100 shadow text-center rounded-xl p-8 justify-center'>
                    <h2 className='text-3xl font-semibold mb-2 text-[#244D3F]'>10</h2>
                    <p className='text-[#64748B] text-[18px]'>Total Friends</p>
                </div>

                {/* On Track */}
                <div className='card bg-base-100 shadow text-center rounded-xl p-8 justify-center'>
                    <h2 className='text-3xl font-semibold mb-2 text-[#244D3F]'>3</h2>
                    <p className='text-[#64748B] text-[18px]'>On Track</p>
                </div>

                {/* Need Attention */}
                <div className='card bg-base-100 shadow text-center rounded-xl p-8 justify-center'>
                    <h2 className='text-3xl font-semibold mb-2 text-[#244D3F]'>6</h2>
                    <p className='text-[#64748B] text-[18px]'>Need Attention</p>
                </div>

                {/* Interactions This Month */}
                <div className='card bg-base-100 shadow text-center rounded-xl p-8 justify-center'>
                    <h2 className='text-3xl font-semibold mb-2 text-[#244D3F]'>12</h2>
                    <p className='text-[#64748B] text-[18px]'>Interactions This Month</p>
                </div>
            </div>

            <div className='container mx-auto divider my-10'></div>
        </div>
    );
};

export default Stats;