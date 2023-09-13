/** @format */


import "./NotificationDropDown.css";
import AOS from "aos";
import "aos/dist/aos.css";

const NotificationDropDown = () => {
	AOS.init();
	return (
		<div
			data-aos='fade-up'
			data-aos-anchor-placement='top-bottom'
		>
			<div className='min-w-[200px] bg-[#0E1726] absolute rounded-md -right-5 top-6 shadow-2xl'>
				<div className='dropdown-container relative p-3 '>
					<ul className='divide-y divide-red-700'>
						
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NotificationDropDown;
