import React, { Suspense } from 'react';
import Hero from './Hero/Hero';
import Stats from './Stats/Stats';
import Friends from './Friends/Friends';
import { useData } from '../../hook/useData';

const HomePage = () => {

    // Fetch friends data
    const friendsPromise = useData()

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