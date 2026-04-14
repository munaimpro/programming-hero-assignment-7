import React from 'react';

const Tags = ({ tags }) => {
    return (
        <div className="flex flex-no-wrap justify-center gap-2 mb-2">
            {tags.map((tag) => (
                <span className="badge badge-sm bg-[#CBFADB] border-[#CBFADB] text-[#244D3F] rounded-2xl font-medium uppercase py-1.5 px-2 mb-2">{tag}</span>
            ))}
        </div>
    );
};

export default Tags;