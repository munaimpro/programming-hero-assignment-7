import React from 'react';

const StatisticsPage = () => {
    return (
        <div className='container mx-auto mt-20'>
            <h2 className='text-[#1F2937] font-semibold text-2xl mb-4'>Timeline</h2>
            
            <div className=''>
                <select class="select">
                    <option value="all" disabled="" selected="">Filter timeline</option>
                    <option value="text">Text</option>
                    <option value="call">Call</option><option value="video">Video</option></select>
            </div>
        </div>
    );
};

export default StatisticsPage;