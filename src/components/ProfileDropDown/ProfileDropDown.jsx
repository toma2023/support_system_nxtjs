/** @format */


import "./ProfileDropDown.css";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Link from "next/link";


const ProfileDropDown = () => {

	const handelSingOut = () => {
		//logOut()
	}

	AOS.init();
	return (
		<div
			data-aos='fade-up'
			data-aos-anchor-placement='top-bottom'
			className="z-50 "
		>
			<div className='min-w-[200px] bg-[#0E1726] absolute rounded-md right-0 top-[110%] shadow-2xl z-50'>
				<div className='dropdown-container relative p-3 '>
					<ul className='divide-y '>
						<Link href={"/"}>
							<li>My Profile</li>
						</Link>
						<Link href={"/"}>
							<li className='border-y'>Change Password</li>
						</Link>
						<Link href={"/"}>
							<li onClick={handelSingOut}>Sign Out</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProfileDropDown;
