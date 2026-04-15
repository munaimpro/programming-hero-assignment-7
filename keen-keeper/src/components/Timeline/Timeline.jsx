import React, { useContext } from 'react';
import callIcon from '../../assets/call.png';
import textIcon from '../../assets/text.png';
import videoIcon from '../../assets/video.png';
import { TimelineContext } from '../../context/TimelineContext';

const Timeline = () => {
    const { friendContactList } = useContext(TimelineContext);
    console.log(friendContactList.length);

    return (
        <div className='container mx-auto mt-20'>
            <h2 className='text-[#1F2937] font-bold text-5xl mb-4'>Timeline</h2>

            <div className='my-6'>
                <select className="select" defaultValue="">
                    <option value="all" disabled="">Filter timeline</option>
                    <option value="text">Text</option>
                    <option value="call">Call</option><option value="video">Video</option></select>
            </div>

            {
                friendContactList.length > 0 ? (
                    friendContactList.map((list, key) => {
                        return (
                            <div key={key} className='shadow-card shadow-sm items-center bg-base-100 flex gap-4 p-3 rounded-xl mb-4'>
                                <div className='w-fit'>
                                    {
                                        list.contact_type === 'call' ? (
                                            <img src={callIcon} alt="call" />
                                        ) : list.contact_type === 'text' ? (
                                            <img src={textIcon} alt="text" />
                                        ) : (
                                            <img src={videoIcon} alt="video" />
                                        )
                                    }
                                </div>
                                <div className='content w-fit'>
                                    <p className='text-[18px] text-[#64748B]'>
                                        <span className='capitalize font-medium text-[20px] text-[#244D3F]'>{list.contact_type}</span> with {list.name}
                                    </p>
                                    <p className='text-[18px] text-[#64748B]'>{
                                        new Date(list.contact_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                                    }</p>
                                </div>
                            </div>
                        )
                    })
                ) : (
                        <div className="text-center text-gray-700 py-6">
                            No Data Found
                        </div>
                )
            }
        </div>
    );
};

export default Timeline;