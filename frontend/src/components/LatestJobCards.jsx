import React from 'react';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();

    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)}
            className="p-4 sm:p-5 lg:p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-2xl transform transition-all duration-300 hover:scale-[1.04] hover:-translate-y-1.5 cursor-pointer"
        >
            {/* Company Logo */}
            <div className="flex items-center justify-start mb-3">
                <img 
                    src={job.company.logo || '/default-logo.png'} 
                    alt={`${job.company.name} logo`} 
                    className="w-12 h-12 object-contain p-1 bg-white rounded-lg shadow-md border border-gray-100"
                />
            </div>

            {/* Company Name */}
            <div className="mb-3">
                <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 tracking-tight">
                    {job?.company?.name}
                </h1>
                <p className="text-xs sm:text-sm text-gray-500">India</p>
            </div>

            {/* Job Title & Description */}
            <div className="mb-4">
                <h2 className="text-lg sm:text-xl font-extrabold text-[#5f0f40] my-2">
                    {job?.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
                    {job?.description}
                </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
                <Badge className="text-blue-800 bg-blue-100 hover:bg-blue-200 font-semibold shadow-sm" variant="ghost">
                    {job?.position} Positions
                </Badge>
                <Badge className="text-pink-600 bg-pink-100 hover:bg-pink-200 font-semibold shadow-sm" variant="ghost">
                    {job?.jobType}
                </Badge>
                <Badge className="text-purple-700 bg-purple-100 hover:bg-purple-200 font-semibold shadow-sm" variant="ghost">
                    {(job?.salary / 10000).toFixed(1)} LPA
                </Badge>
            </div>
        </div>
    );
};

export default LatestJobCards;
