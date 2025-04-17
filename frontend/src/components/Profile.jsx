import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

const isResume = true;

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const { user } = useSelector(store => store.auth);

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-4 sm:p-6 md:p-8'>
                <div className='flex flex-col sm:flex-row justify-between gap-4'>
                    <div className='flex flex-col sm:flex-row items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="profile" />
                        </Avatar>
                        <div className='text-center sm:text-left'>
                            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                            <p className='text-sm text-gray-600'>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <div className='text-center sm:text-right'>
                        <Button onClick={() => setOpen(true)} variant="outline">
                            <Pen className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <div className='my-5 space-y-2'>
                    <div className='flex items-center gap-3'>
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Contact className="w-4 h-4" />
                        <span className="text-sm">{user?.phoneNumber}</span>
                    </div>
                </div>

                <div className='my-5'>
                    <h2 className='font-semibold text-base mb-2'>Skills</h2>
                    <div className='flex flex-wrap items-center gap-2'>
                        {
                            user?.profile?.skills.length !== 0
                                ? user?.profile?.skills.map((item, index) => (
                                    <Badge key={index}>{item}</Badge>
                                ))
                                : <span className="text-sm text-gray-500">NA</span>
                        }
                    </div>
                </div>

                <div className='mt-6'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        isResume
                            ? (
                                <div className="mt-1">
                                    <a
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        href={user?.profile?.resume}
                                        className='text-blue-600 text-sm hover:underline break-all'
                                    >
                                        {user?.profile?.resumeOriginalName}
                                    </a>
                                </div>
                            )
                            : <span className="text-sm text-gray-500">NA</span>
                    }
                </div>
            </div>

            <div className='max-w-4xl mx-auto bg-white rounded-2xl p-4 sm:p-6'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                <AppliedJobTable />
            </div>

            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    )
}

export default Profile
