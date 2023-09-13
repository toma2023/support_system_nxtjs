/** @format */

import { AiOutlineEye } from "react-icons/ai";

import "./TicktTable.css";
import moment from "moment/moment";
import Link from "next/link";
import StatusBtn from "./StatusBtn/StatusBtn";


const TicketTable = ({ tickets }) => {
	return (
		<div>
			<div className='overflow-x-auto'>
				<table className=' w-[100%] table'>
					{/* head */}
					<thead>
						<tr className='text-[#00947B]'>
							<th>S/N</th>
							<th>TICKET DATE</th>
							<th>TICKET</th>
							<th>ISSUED BY</th>
							<th>USER NAME</th>
							<th>ORGANIZAION (WINGS)</th>
							<th>PROJECT</th>
							<th>PRIORITY</th>
							<th>STATUS</th>
							<th>ACTION</th>
						</tr>
					</thead>
					<tbody>
						{tickets.map((ticket, i) => (
							<tr
								key={ticket._id}
								className='text-white'
							>
								<td>{i + 1}</td>
								<td>
									{moment(new Date(ticket.date)).format(
										"YYYY-MM-DD HH:mm:ss"
									)}
								</td>
								<td>{ticket.ticketID}</td>
								<td>{ticket.email}</td>
								<td>{ticket.issuedBy}</td>
								<td>NTMC</td>
								<td>{ticket.systemName}</td>

								<td>
									<div
										className='tooltip'
										data-tip={ticket.priority}
									>
										<div
											className={`w-[10px] h-[10px] ${
												ticket.priority === "high"
													? "bg-[#E7515A]"
													: ticket.priority ===
													  "mediam"
													? "bg-[#1B55E2]"
													: "bg-[#B3B5B5]"
											} rounded-full mx-auto`}
										></div>
									</div>
								</td>
								<td className='w-[150px]'>
									<StatusBtn status={ticket.status} />
								</td>

								<td>
									<Link
										href={`/dashboard/about_ticket/${ticket._id}`}
									>
										<button className='mx-auto px-5 py-2 bg-[#2196F3] rounded-md text-white hover-effect'>
											<AiOutlineEye />
										</button>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TicketTable;
