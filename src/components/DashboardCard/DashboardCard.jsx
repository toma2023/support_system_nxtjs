import Link from "next/link";


const DashboardCard = ({ status, ticketCreate, ticketCount, newTicket, highPriority }) => {
	
	
    return (
		<div className='bg-[#0E1726] rounded-md'>
			<div className='flex items-center justify-between py-8 px-4 border-b border-dashed border-[#494F50]'>
				<p className='text-white font-semibold'>{status}</p>

				{ticketCreate && (
					<Link href={"/dashboard/new_ticket"}>
						<button className='bg-[#E2A040] text-white py-[6px] px-3 rounded-md text-[14px] shadow-[1px_4px_5px_1px_rgba(226,160,63,.5)] hover-effect'>
							New Ticket
						</button>
					</Link>
				)}
			</div>

			{/* bottom section  */}
			<div
				
				className='py-4 cursor-pointer'
			>
				<div className='flex items-center justify-center'>
					<div className='w-[80px] h-[80px] flex items-center justify-center text-[#2196F3] bg-[#191E3A] rounded-full text-3xl font-bold count-container relative'>
						{ticketCount ? ticketCount : 0}
					</div>
				</div>

				<div className='text-center pt-2 flex flex-col gap-2 font-semibold'>
					<p className='text-[#00947B]'>
						{newTicket ? newTicket : 0} new
					</p>
					<p className='text-[#B3B5B5]'>
						<span className='text-[#2196F3] '>
							{highPriority ? highPriority : 0} Ticket
						</span>{" "}
						with High priority
					</p>
				</div>
			</div>
		</div>
	);
};

export default DashboardCard;