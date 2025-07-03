import React from 'react';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();

    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)}
            className="p-4 sm:p-5 lg:p-6 rounded-2xl shadow-md hover:shadow-2xl bg-white border border-gray-100 cursor-pointer transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-1"
        >
            {/* Company Logo */}
            <img 
                src={job.company.logo || '/default-logo.png'} 
                alt={`${job.company.name} logo`} 
                className="w-12 h-12 object-contain mb-3 bg-white rounded-md shadow-sm p-1"
            />

            {/* Company Name */}
            <div className="mb-4">
                <h1 className="font-semibold text-base sm:text-lg md:text-xl text-gray-800">{job?.company?.name}</h1>
                <p className="text-xs sm:text-sm text-gray-500">India</p>
            </div>

            {/* Job Title & Description */}
            <div className="mb-4">
                <h1 className="font-bold text-lg sm:text-xl text-[#3a0ca3] my-2">{job?.title}</h1>
                <p className="text-sm sm:text-base text-gray-600 line-clamp-3">{job?.description}</p>
            </div>

            {/* Job Info Badges */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
                <Badge className="text-blue-800 bg-blue-100 hover:bg-blue-200 font-bold shadow-sm" variant="ghost">
                    {job?.position} Positions
                </Badge>
                <Badge className="text-orange-600 bg-orange-100 hover:bg-orange-200 font-bold shadow-sm" variant="ghost">
                    {job?.jobType}
                </Badge>
                <Badge className="text-purple-700 bg-purple-100 hover:bg-purple-200 font-bold shadow-sm" variant="ghost">
                    {(job?.salary / 10000).toFixed(1)} LPA
                </Badge>
            </div>
        </div>
    );
};

export default LatestJobCards;
