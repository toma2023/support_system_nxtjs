import logo from "../../../public/logo.png"

import { FaRegBell, FaUsersCog } from 'react-icons/fa';

import { useState } from 'react';



import { AiFillDashboard } from "react-icons/ai";
import { BsQuestionLg } from "react-icons/bs";
import Container from '../Container/Container';
import Link from 'next/link';
import Image from 'next/image';
import NotificationDropDown from "../NotificationDropDown/NotificationDropDown";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";


const NavBar = () => {
	

    const [profileIsOpen, setProfileIsOpen] = useState(false);
    const [notificationIsOpen, setNotificationIsOpen] = useState(false);
    const handelProfileOpen = event => {
        event.stopPropagation();
        setProfileIsOpen(!profileIsOpen);
        setNotificationIsOpen(false);
    }
    const handelNotificationOpen = event => {
        event.stopPropagation();
		setNotificationIsOpen(!profileIsOpen);
        setProfileIsOpen(false);
	};


    return (
		<div
			onClick={() => {
				setProfileIsOpen(false);
				setNotificationIsOpen(false);
			}}
		>
			<Container>
				<div>
					<div className='flex items-center'>
						<Link href={"/dashboard"}>
							<div className='flex items-center gap-2'>
								<div className='w-[60px] md:w-[40px]'>
									<Image
										src={logo}
										alt=''
									/>
								</div>
								<h2 className='hidden md:block text-xl font-bold text-white'>
									NTMC Support System
								</h2>
							</div>
						</Link>

						<div className='ml-auto flex items-center gap-4'>
							<div
								onClick={handelNotificationOpen}
								className='bg-[#191E3A] relative cursor-pointer w-[35px] h-[35px] flex items-center justify-center rounded-full'
							>
								<FaRegBell className='text-2xl text-[#B3B5B5]' />

								{notificationIsOpen && <NotificationDropDown />}
							</div>

							<div className='relative'>
								<div
									onClick={handelProfileOpen}
									className='flex items-center gap-2 cursor-pointer relative'
								>
									<div className='hidden rounded-full overflow-hidden md:block w-[40px]'>
										<Image
											src={""}
											alt=''
										/>
									</div>
									<p className='text-sm text-[#B3B5B5]'>
										Welcome{" "}
										<span className='text-[#25D5D7]'>
											{""}
										</span>
									</p>
								</div>
								{profileIsOpen && <ProfileDropDown />}
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<div className=' bg-[#191E3A] flex items-center py-4 rounded-md text-white text-[14px] my-2 '>
					<Link href={"/"} className='px-6  border-r flex items-center gap-3 font-semibold'>
						<AiFillDashboard /> Dashbaord
					</Link>

					<Link href={"/"} className='px-6 flex items-center gap-3 font-semibold'>
						<BsQuestionLg /> FAQ
					</Link>
					{"role" === 'admin' && (
						<Link
							href={"/dashboard/manage-user"}
							className='px-6 border-l flex items-center gap-3 font-semibold'
						>
							<FaUsersCog /> Manage User
						</Link>
					)}
				</div>
			</Container>
		</div>
	);
};

export default NavBar;