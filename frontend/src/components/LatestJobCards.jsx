import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();

    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)} 
            className='p-4 sm:p-5 lg:p-6 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer transition-all duration-200 hover:scale-105'
        >
            <img 
                    src={job.company.logo || '/default-logo.png'} 
                    alt={`${job.company.name} logo`} 
                    className='w-10 h-10 object-contain'
                />

            <div className='mb-4'>
                <h1 className='font-medium text-base sm:text-lg md:text-xl'>{job?.company?.name}</h1>
                <p className='text-xs sm:text-sm text-gray-500'>India</p>
            </div>
            <div className='mb-4'>
                <h1 className='font-bold text-lg sm:text-xl my-2'>{job?.title}</h1>
                <p className='text-sm sm:text-base text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex flex-wrap items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
            </div>
        </div>
    )
}

export default LatestJobCards
