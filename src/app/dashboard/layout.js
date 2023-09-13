"use client"
import Container from "@/components/Container/Container";
import NavBar from "@/components/NavBar/NavBar";

const Dashboard = ({children}) => {
	
    return (
		<div className="relative">
			<NavBar />

			<div>
			{children}	
			</div>

			
			{/* Footer  */}
			<Container>
				<div className='flex items-center justify-between pb-3 text-[#B3B5B5] text-[10px] md:text-[14px]'>
					<p>
						Copyright © 2023{" "}
						<span className='text-white font-bold'>MGR</span>,
						All rights reserved.
					</p>

					<p>
						Designed & Developed By:{" "}
						<span className='text-white font-bold'>
							Toma
						</span>
					</p>
				</div>
			</Container>
		</div>
	);
};

export default Dashboard;