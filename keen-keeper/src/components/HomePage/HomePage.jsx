import React, { Suspense } from 'react';
import Hero from './Hero/Hero';
import Stats from './Stats/Stats';
import Friends from './Friends/Friends';

const HomePage = () => {

    // Fetch friends data
    const fetchFriendsData = async () => {
        const response = await fetch('/friends.json');
        return response.json();
    }

    const friendsPromise = fetchFriendsData();

    return (
        <>
            <Hero></Hero>
            <Stats></Stats>
            <Suspense fallback={<span className="loading loading-xl loading-spinner text-primary"></span>}>
                <Friends friendsPromise={friendsPromise}></Friends>
            </Suspense>
        </>
    );
};

export default HomePage;