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
            <Suspense fallback={<div className='flex w-full items-center justify-center'>
                <span className="loading loading-xl loading-spinner text-primary"></span>
            </div>}>
                <Friends friendsPromise={friendsPromise}></Friends>
            </Suspense>
        </>
    );
};

export default HomePage;