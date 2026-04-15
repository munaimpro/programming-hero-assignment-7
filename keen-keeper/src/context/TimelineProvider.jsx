import React, { useState } from 'react';
import { TimelineContext } from './TimelineContext';

const TimelineProvider = ({ children }) => {
    
    const [friendContactList, setFriendContact] = useState([]);

    const data = {
        friendContactList,
        setFriendContact
    }

    return (
        <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
    );
};

export default TimelineProvider;