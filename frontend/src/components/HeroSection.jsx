import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className="text-center bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-10 px-4">
            <div className="flex flex-col gap-6 my-10">
                {/* Tagline */}
                <span className="mx-auto px-6 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 text-[#F83002] font-medium shadow-md">
                    🚀 No. 1 Job Hunt Website
                </span>

                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
                    Search, Apply & <br />
                    Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A38C2] to-[#9F68FF]">Dream Jobs</span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl mx-auto">
                    Search through thousands of opportunities across industries and find the perfect match for your skills and passion!
                </p>

                {/* Search Bar */}
                <div className="flex w-full sm:w-4/5 md:w-[40%] mx-auto items-center gap-4 border border-gray-200 bg-white/80 backdrop-blur-md shadow-xl rounded-full px-4 py-2 transition-all duration-300 hover:shadow-2xl">
                    <input
                        type="text"
                        placeholder="Find your dream jobs"
                        onChange={(e) => setQuery(e.target.value)}
                        className="outline-none border-none w-full bg-transparent text-sm sm:text-base placeholder-gray-500"
                    />
                    <Button
                        onClick={searchJobHandler}
                        className="rounded-full bg-gradient-to-r from-[#6A38C2] to-[#9F68FF] hover:brightness-110 transition-transform transform hover:scale-105 shadow-lg"
                    >
                        <Search className="h-5 w-5 text-white" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
