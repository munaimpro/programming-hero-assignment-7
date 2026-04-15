import React, { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { TimelineContext } from "../../context/TimelineContext";

const StatisticsPage = () => {

    const { friendContactList } = useContext(TimelineContext);
    // console.log(friendContactList);

    const totalCall = friendContactList.filter(item => item.contact_type == 'call');
    const totalVideo = friendContactList.filter(item => item.contact_type == 'video');
    const totalText = friendContactList.filter(item => item.contact_type == 'text');
    
    console.log(totalCall);
    console.log(totalCall.length);

    const data = [
        { name: "Call", value: totalCall.length, fill: "#1F3D3A" },
        { name: "Text", value: totalText.length, fill: "#7C3AED" },
        { name: "Video", value: totalVideo.length, fill: "#22C55E" },
    ];

    return (
        <div className="container mx-auto mt-20">
            <h2 className='text-[#1F2937] font-bold text-5xl mb-4'>Friendship Analytics</h2>

            <div className="card bg-base-100 shadow p-6">
                <h2 className="text-lg font-semibold text-[20px] text-[#244D3F] mb-4">By Interaction Type</h2>
                {
                    totalCall.length > 0 || totalText.length > 0 || totalVideo.length > 0 ? (
                        <div>
                            <div className="w-full h-72">
                                <ResponsiveContainer>
                                    <PieChart>
                                        <Pie
                                            data={data}
                                            innerRadius="80%"
                                            outerRadius="100%"
                                            // Corner radius is the rounded edge of each pie slice
                                            cornerRadius="10%"
                                            fill="#8884d8"
                                            // padding angle is the gap between each pie slice
                                            paddingAngle={5}
                                            dataKey="value"
                                        // isAnimationActive={isAnimationActive}
                                        />
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Legend */}
                            <div className="flex justify-center gap-6 mt-4 text-sm font-medium">
                                <div className="flex items-center gap-2 text-[#64748B]">
                                    <span className="w-3 h-3 rounded-full bg-[#1F3D3A]"></span>
                                    Call
                                </div>
                                <div className="flex items-center gap-2 text-[#64748B]">
                                    <span className="w-3 h-3 rounded-full bg-[#7C3AED]"></span>
                                    Text
                                </div>
                                <div className="flex items-center gap-2 text-[#64748B]">
                                    <span className="w-3 h-3 rounded-full bg-[#22C55E]"></span>
                                    Video
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-gray-700 py-6">
                                No interactions logged yet. {totalCall}
                        </div>
                    )
                }
                
            </div>
        </div>
    );
};

export default StatisticsPage;