import React from 'react';
import callIcon from '../../assets/call.png';
import textIcon from '../../assets/text.png';
import videoIcon from '../../assets/video.png';

const Timeline = () => {
    return (
        <div className='container mx-auto mt-20'>
            <h2 className='text-[#1F2937] font-bold text-5xl mb-4'>Timeline</h2>

            <div className='my-6'>
                <select class="select">
                    <option value="all" disabled="" selected="">Filter timeline</option>
                    <option value="text">Text</option>
                    <option value="call">Call</option><option value="video">Video</option></select>
            </div>

            <div className='shadow-card items-center bg-base-100 flex gap-4 p-3 rounded-xl mb-4'>
                <div className='w-fit'>
                    <img src={callIcon} alt="call" />
                </div>
                <div className='w-fit'>
                    <img src={textIcon} alt="call" />
                </div>
                <div className='w-fit'>
                    <img src={videoIcon} alt="call" />
                </div>
                <div className='content w-fit'>
                    <p className='text-[18px] text-[#64748B]'>
                        <span className='capitalize font-medium text-[20px] text-[#244D3F]'>meetup</span> with Tom Baker
                    </p>
                    <p className='text-[18px] text-[#64748B]'>March 29, 2026</p>
                </div>
            </div>

            <div className='shadow-card items-center bg-base-100 flex gap-4 p-3 rounded-xl mb-4'>
                <div className='w-fit'>
                    <img src={callIcon} alt="call" />
                </div>
                <div className='w-fit'>
                    <img src={textIcon} alt="call" />
                </div>
                <div className='w-fit'>
                    <img src={videoIcon} alt="call" />
                </div>
                <div className='content w-fit'>
                    <p className='text-[18px] text-[#64748B]'>
                        <span className='capitalize font-medium text-[20px] text-[#244D3F]'>meetup</span> with Tom Baker
                    </p>
                    <p className='text-[18px] text-[#64748B]'>March 29, 2026</p>
                </div>
            </div>
        </div>
    );
};

export default Timeline;