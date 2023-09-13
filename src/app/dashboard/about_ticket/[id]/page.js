import { useLoaderData, useParams } from "react-router-dom";
import bg from "../../../../../public/bg.png"

import { useState } from "react";
import ResponseTicket from "../../../components/ResponseTicket/ResponseTicket";
import { BsSendFill } from "react-icons/bs";
import { useQuery } from "react-query";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const AboutTicket = () => {
	const [axiosSecure] = useAxiosSecure();
	const id = useParams()
	const { loading} = useAuth();
	const {data:ticket = [], refetch } = useQuery({
		queryKey: ['ticket'],
		enabled: !loading,
		queryFn: async () => {
			const result = await axiosSecure(
				`get-single-ticket/${id.id}`
			);
			return result.data;
		}
	})

    const { ticketSubject, description } = ticket;
    
    let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
    }
    
    return (
		<div className=''>
			<Container>
				<div className='bg-primary-bg pb-[55px] shadow-[0px_9px_5px_-3px_rgba(0,0,0,.3)]'>
					<div className='px-4 py-2 bg-secondary-bg flex items-center justify-between'>
						<p className='text-light-gray-color'>
							Ticket Subject:{" "}
							<span className='text-light-yellow-color'>
								{ticketSubject}
							</span>
						</p>

						<div>
							<span onClick={openModal}>
								<Button
									data={<BsSendFill />}
									bg={"bg-light-blue-color"}
									textColor={"text-white-color"}
								/>
							</span>
						</div>
					</div>

					<div
						style={{ backgroundImage: `url(${bg})` }}
						className='h-[300px] bg-red-300 px-8 pb-4 overflow-y-auto text-white-color'
					>
						<div className='text-center'>
							<div className='my-4 py-1 px-6  rounded-md bg-primary-bg inline-block'>
								{ticketSubject}
							</div>
						</div>

						<div className=' relative'>
							{description?.map((item, i) => {
								
								if (Object.keys(item)[0] === "user") {
									return (
										<div
											key={i}
											className='mt-3 bg-primary-bg md:max-w-[60%] px-3 py-2 rounded-md'
										>
											<p className='inline-block   '>
												{item.user}
											</p>

											{item.img && (
												<div>
													<img
														src={item.img}
														alt=''
														className='w-[50%] mt-2'
													/>
												</div>
											)}
										</div>
									);
								} else {
									return (
										<div
											key={i}
											className='flex  justify-end mt-3'
										>
											<div className='bg-gray-color  md:max-w-[60%] px-3 py-1 rounded-md'>
												<p className='inline-block  text-justify'>
													{item.admin}
												</p>

												{item.img && (
													<div>
														<img
															src={item.img}
															alt=''
															className='w-[50%] mt-2'
														/>
													</div>
												)}
											</div>
										</div>
									);
								}
							})}
						</div>
					</div>
				</div>
			</Container>

			<ResponseTicket
				isOpen={isOpen}
				closeModal={closeModal}
				ticket={ticket}
				refetch={refetch}
			/>
		</div>
	);
};

export default AboutTicket;