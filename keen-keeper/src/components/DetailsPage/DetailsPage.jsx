import React, { Suspense, use } from 'react';
import friend1 from '../../assets/Ellipse1.png';
import { ArchiveIcon, Bell, BellOff, Mail, Trash2Icon } from 'lucide-react'
import callIcon from '../../assets/call.png';
import textIcon from '../../assets/text.png';
import videoIcon from '../../assets/video.png';
import { useLoaderData, useParams } from 'react-router';
import Tags from '../HomePage/Friends/Tags';

const DetailsPage = () => {

    const {friendId} = useParams();
    
    // Fetch friends data
    const friends = useLoaderData();

    // Find friend
    const friend = friends.find(friend => friend.id === parseInt(friendId));
    console.log(friend);

    // Set status
    let status = '';
    if (friend.status == 'overdue') {
        status = <div className="badge badge-success bg-[#EF4444] border-[#EF4444] text-base-100 rounded-2xl font-medium text-[12px] capitalize py-1.5 px-2 mb-2">Overdue</div>
    }
    if (friend.status == 'almost due') {
        status = <div className="badge badge-success bg-[#EFAD44] border-[#EFAD44] text-base-100 rounded-2xl font-medium text-[12px] capitalize py-1.5 px-2 mb-2">Almost Due</div>
    }
    if (friend.status == 'on-track') {
        status = <div className="badge badge-success bg-[#244D3F] border-[#244D3F] text-base-100 rounded-2xl font-medium text-[12px] capitalize py-1.5 px-2 mb-2">On-Track</div>
    }

    // Formatted Date
    const formattedDate = new Date(friend.next_due_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <div className='container mx-auto mt-20'>
            <div className="grid grid-cols-1 gap-6 p-5 lg:grid-cols-5">
                <div className="col-span-2">
                    {/* Friend 1 */}
                    <div className='card bg-base-100 shadow text-center rounded-xl p-8 justify-center items-center'>
                        <div className='bg-[#D9D9D9] rounded-full mb-3'>
                            <img src={friend.picture} alt={friend.name} />
                        </div>
                        
                        <h2 className='text-[20px] font-semibold mb-2 text-[#1F2937]'>{friend.name}</h2>
                        
                        <p className='text-[#64748B] text-[12px] mb-2'>{friend.days_since_contact}d ago</p>

                        {/* Tags */}
                        {/* <div className="badge badge-success bg-[#CBFADB] border-[#CBFADB] text-[#244D3F] rounded-2xl font-medium text-[12px] uppercase py-1.5 px-2 mb-2">Work</div> */}
                        <Tags tags={friend.tags} />
                        
                        {/* Status */}
                        {status}
                        
                        {/* Bio */}
                        <p style={{ "fontStyle": "italic" }} className='text-[#64748B] text-sm'>"{friend.bio}"</p>
                    </div>

                    {/* Action buttons */}
                    <div className='mt-2'>
                        <button className="bg-base-100 btn btn-block text-[#1F2937] mb-2">
                            <BellOff size={20} strokeWidth={2} />
                            Snooze 2 Weeks
                        </button>
                        <button className="bg-base-100 btn btn-block text-[#1F2937] mb-2">
                            <ArchiveIcon size={20} strokeWidth={2} />
                            Archive
                        </button>
                        <button className="bg-base-100 btn btn-block text-red-600 mb-2">
                            <Trash2Icon size={20} strokeWidth={2} />
                            Delete
                        </button>
                    </div>
                </div>

                <div className="col-span-3 space-y-6">
                    <div className='grid gap-6 grid-cols-3'>
                        {/* Days since cotact */}
                        <div className='card bg-base-100 shadow text-center rounded-xl p-8 justify-center'>
                            <h2 className='text-3xl font-semibold mb-2 text-[#244D3F]'>{friend.days_since_contact}</h2>
                            <p className='text-[#64748B] text-[18px]'>Days Since Contact</p>
                        </div>

                        {/* On Track */}
                        <div className='card bg-base-100 shadow text-center rounded-xl p-8 justify-center'>
                            <h2 className='text-3xl font-semibold mb-2 text-[#244D3F]'>{friend.goal}</h2>
                            <p className='text-[#64748B] text-[18px]'>Goal(Days)</p>
                        </div>

                        {/* Need Attention */}
                        <div className='card bg-base-100 shadow text-center rounded-xl p-8 justify-center'>
                            <h2 className='text-3xl font-semibold mb-2 text-[#244D3F]'>{formattedDate}</h2>
                            <p className='text-[#64748B] text-[18px]'>Next Due</p>
                        </div>
                    </div>

                    {/* Realationship Goal */}
                    <div className='card bg-base-100 shadow rounded-xl p-8 justify-center'>
                        <div className='flex justify-between mb-4'>
                            <h2 className='text-[#244D3F] font-medium text-[20px]'>Relationship Goal</h2>
                            <button className=' btn btn-sm'>Edit</button>
                        </div>
                        <p className='text-[#64748B] text-[18px]'>Connect every <span className='text-[#1F2937]'>{friend.goal} days</span></p>
                    </div>

                    {/* Quick Chek-in */}
                    <div className='card bg-base-100 shadow rounded-xl p-8 justify-center'>
                        <h2 className='text-[#244D3F] font-medium text-[20px]'>Quick Check-In</h2>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <button className='btn h-20 py-4 flex flex-col text[#1F2937]'>
                                <div>
                                    <img src={callIcon} alt="call" />
                                </div>
                                <span>Call</span>
                            </button>
                            <button className='btn h-20 py-4 flex flex-col text[#1F2937]'>
                                <div>
                                    <img src={textIcon} alt="text" />
                                </div>
                                <span>Text</span>
                            </button>
                            <button className='btn h-20 py-4 flex flex-col text[#1F2937]'>
                                <div>
                                    <img src={videoIcon} alt="video" />
                                </div>
                                <span>Video</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;