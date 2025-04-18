import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className="bg-white shadow-md sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold">
                    Hire<span className="text-[#F83002]">Me</span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-10">
                    <ul className="flex items-center gap-6 font-medium text-gray-700">
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li><Link to="/admin/companies">Companies</Link></li>
                                    <li><Link to="/admin/jobs">Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/jobs">Jobs</Link></li>
                                    <li><Link to="/browse">Browse</Link></li>
                                </>
                            )
                        }
                    </ul>

                    {!user ? (
                        <div className="flex items-center gap-3">
                            <Link to="/login"><Button variant="outline">Login</Button></Link>
                            <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div className="flex gap-3 items-center mb-3">
                                    <Avatar>
                                        <AvatarImage src={user?.profile?.profilePhoto} />
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold">{user?.fullname}</h4>
                                        <p className="text-sm text-muted-foreground">{user?.profile?.bio}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 text-gray-700">
                                    {
                                        user.role === 'student' && (
                                            <div className="flex items-center gap-2">
                                                <User2 />
                                                <Link to="/profile"><Button variant="link">View Profile</Button></Link>
                                            </div>
                                        )
                                    }
                                    <div className="flex items-center gap-2">
                                        <LogOut />
                                        <Button onClick={logoutHandler} variant="link">Logout</Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>

                {/* Hamburger menu (Mobile only) */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden flex flex-col items-center gap-4 bg-white px-4 py-6 shadow-md">
                    <ul className="flex flex-col items-center gap-3 font-medium text-gray-700">
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li><Link to="/admin/companies">Companies</Link></li>
                                    <li><Link to="/admin/jobs">Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/jobs">Jobs</Link></li>
                                    <li><Link to="/browse">Browse</Link></li>
                                </>
                            )
                        }
                    </ul>

                    {!user ? (
                        <div className="flex flex-col gap-2 w-full items-center">
                            <Link to="/login" className="w-full"><Button variant="outline" className="w-full">Login</Button></Link>
                            <Link to="/signup" className="w-full"><Button className="w-full bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-4 w-full">
                            <div className="flex gap-3 items-center">
                                <Avatar>
                                    <AvatarImage src={user?.profile?.profilePhoto} />
                                </Avatar>
                                <div>
                                    <h4 className="font-semibold">{user?.fullname}</h4>
                                    <p className="text-sm text-muted-foreground text-center">{user?.profile?.bio}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                {
                                    user.role === 'student' && (
                                        <div className="flex items-center gap-2">
                                            <User2 />
                                            <Link to="/profile"><Button variant="link">View Profile</Button></Link>
                                        </div>
                                    )
                                }
                                <div className="flex items-center gap-2">
                                    <LogOut />
                                    <Button onClick={logoutHandler} variant="link">Logout</Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;
