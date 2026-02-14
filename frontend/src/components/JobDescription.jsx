import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

const JobDescription = () => {
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
    const isIntiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isIntiallyApplied);

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
           
            if (res.data.success) {
                setIsApplied(true);
                const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] }
                dispatch(setSingleJob(updatedSingleJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-10'>
            <div className='bg-white shadow-lg rounded-xl p-6 sm:p-8'>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-5'>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-2xl sm:text-3xl text-gray-800'>{singleJob?.title}</h1>
                        <div className='flex flex-wrap gap-3 mt-4'>
                            <Badge className={'text-blue-700 font-bold'} variant="ghost">{singleJob?.position} Positions</Badge>
                            <Badge className={'text-[#F83002] font-bold'} variant="ghost">{singleJob?.jobType}</Badge>
                            <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{(singleJob?.salary / 10000).toFixed(1)} LPA</Badge>
                        </div>
                    </div>
                    <Button
                        onClick={isApplied ? null : applyJobHandler}
                        disabled={isApplied}
                        className={`mt-3 md:mt-0 rounded-lg w-full sm:w-fit ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>
                        {isApplied ? 'Already Applied' : 'Apply Now'}
                    </Button>
                </div>

                <h2 className='border-b-2 border-b-gray-200 font-semibold text-lg sm:text-xl py-4 mt-6 text-gray-800'>Job Description</h2>
                <div className='my-4 space-y-5 text-sm sm:text-base text-gray-700'>
                    <div>
                        <h3 className='font-semibold'>Role:</h3>
                        <p>{singleJob?.title}</p>
                    </div>
                    <div>
                        <h3 className='font-semibold'>Location:</h3>
                        <p>{singleJob?.location}</p>
                    </div>
                    <div>
                        <h3 className='font-semibold'>Description:</h3>
                        <p>{singleJob?.description}</p>
                    </div>
                    <div>
                        <h3 className='font-semibold'>Experience:</h3>
                        <p>{singleJob?.experience} yrs</p>
                    </div>
                    <div>
                        <h3 className='font-semibold'>Salary:</h3>
                        <p>{singleJob?.salary}K/Month</p>
                    </div>
                    <div>
                        <h3 className='font-semibold'>Total Applicants:</h3>
                        <p>{singleJob?.applications?.length}</p>
                    </div>
                    <div>
                        <h3 className='font-semibold'>Posted Date:</h3>
                        <p>{singleJob?.createdAt.split("T")[0]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDescription;
