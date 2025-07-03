import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
    const navigate = useNavigate();

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    };

    return (
        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:translate-y-[-3px]">
            {/* Top Row */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                    {daysAgoFunction(job?.createdAt) === 0
                        ? 'Today'
                        : `${daysAgoFunction(job?.createdAt)} days ago`}
                </p>
                <Button variant="outline" className="rounded-full shadow hover:shadow-md" size="icon">
                    <Bookmark className="text-[#7209b7]" />
                </Button>
            </div>

            {/* Company Info */}
            <div className="flex items-center gap-3 my-4">
                <Button className="p-6 bg-gradient-to-br from-purple-100 to-white shadow-md" variant="ghost" size="icon">
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className="font-semibold text-lg text-gray-800">{job?.company?.name}</h1>
                    <p className="text-sm text-gray-500">India</p>
                </div>
            </div>

            {/* Job Title & Description */}
            <div>
                <h1 className="font-bold text-xl text-[#3a0ca3] my-2">{job?.title}</h1>
                <p className="text-sm text-gray-600">{job?.description}</p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
                <Badge className="text-blue-800 bg-blue-100 hover:bg-blue-200 font-bold shadow" variant="ghost">
                    {job?.position} Positions
                </Badge>
                <Badge className="text-orange-600 bg-orange-100 hover:bg-orange-200 font-bold shadow" variant="ghost">
                    {job?.jobType}
                </Badge>
                <Badge className="text-purple-700 bg-purple-100 hover:bg-purple-200 font-bold shadow" variant="ghost">
                    {job?.salary} LPA
                </Badge>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
                <Button
                    onClick={() => navigate(`/description/${job?._id}`)}
                    variant="outline"
                    className="hover:shadow-md transition-transform hover:scale-105"
                >
                    Details
                </Button>
                <Button
                    className="bg-gradient-to-r from-[#7209b7] to-[#b5179e] text-white hover:brightness-110 transition-transform hover:scale-105 shadow-md"
                >
                    Save For Later
                </Button>
            </div>
        </div>
    );
};

export default Job;
