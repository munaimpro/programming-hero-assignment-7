import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "Call", value: 25 },
    { name: "Text", value: 45 },
    { name: "Video", value: 30 },
];

const COLORS = ["#1F3D3A", "#7C3AED", "#22C55E"];

const StatisticsPage = () => {
    return (
        <div className="container mx-auto mt-20">
            <h2 className='text-[#1F2937] font-bold text-5xl mb-4'>Friendship Analytics</h2>

            <div className="card bg-base-100 shadow p-6">
                <h2 className="text-lg font-semibold text-[20px] text-[#244D3F] mb-4">By Interaction Type</h2>

                <div className="w-full h-72">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={70}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="value"
                                cornerRadius={10}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))}
                            </Pie>
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
        </div>
    );
};

export default StatisticsPage;