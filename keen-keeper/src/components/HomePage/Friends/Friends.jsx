import React, { use } from 'react';
import Tags from './Tags';
import { Link } from 'react-router';

const Friends = ({ friendsPromise }) => {

    const friends = use(friendsPromise);
    console.log(friends);

    return (
        <div className='container mx-auto'>
            <h2 className='text-[#1F2937] font-semibold text-2xl mb-4'>Your friends</h2>
            <div className="grid gap-6 grid-col-1 lg:grid-cols-4">
                {/* Friend 1 */}
                {
                    friends.map((friend, key) => {

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

                        return (
                            <Link to={`/friends/${friend.id}`}>
                                <div key={key} className='card bg-base-100 shadow text-center rounded-xl py-8 justify-center items-center cursor-pointer'>

                                    {/* Profile Picture */}
                                    <div className='bg-[#D9D9D9] rounded-full overflow-hidden mb-3'>
                                        <img src={friend.picture} alt="Friend" />
                                    </div>

                                    {/* Name */}
                                    <h2 className='text-[20px] font-semibold mb-2 text-[#1F2937]'>{friend.name}</h2>

                                    {/* Last contact day */}
                                    <p className='text-[#64748B] text-[12px] mb-2'>{friend.days_since_contact} days ago</p>

                                    {/* Tags */}
                                    <Tags tags={friend.tags} />

                                    {/* Status */}
                                    {status}
                                </div>
                            </Link>
                            
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Friends;