import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 md:my-16 lg:my-20">
            {/* Section Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center sm:text-left leading-snug">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A38C2] to-[#9F68FF] drop-shadow-sm">
                    Latest & Top
                </span>{' '}
                Job Openings
            </h1>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8 mt-8">
                {allJobs.length <= 0 ? (
                    <span className="col-span-full text-center text-gray-400 text-lg font-medium">
                        🚫 No Job Available
                    </span>
                ) : (
                    allJobs.slice(0, 6).map((job) => (
                        <LatestJobCards key={job._id} job={job} />
                    ))
                )}
            </div>
        </div>
    );
};

export default LatestJobs;
