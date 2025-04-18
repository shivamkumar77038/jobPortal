import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState();
    const dispatch = useDispatch();

    const registerNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`, { companyName }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res?.data?.success) {
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl mt-10 bg-white p-6 sm:p-10 rounded-xl shadow-lg">
                    <div className="mb-8">
                        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-center">Your Company Name</h1>
                        <p className="text-gray-500 text-sm sm:text-base text-center mt-2">
                            What would you like to give your company name? You can change this later.
                        </p>
                    </div>

                    <div>
                        <Label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">Company Name</Label>
                        <Input
                            type="text"
                            className="mb-4"
                            placeholder="JobHunt, Microsoft etc."
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-3 mt-6">
                        <Button
                            variant="outline"
                            className="w-full sm:w-auto"
                            onClick={() => navigate("/admin/companies")}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="w-full sm:w-auto"
                            onClick={registerNewCompany}
                        >
                            Continue
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyCreate
