/** @format */

import { useQuery } from "react-query";
import useAuth from "./useAuth";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";

const useUserTickets = (status) => {
    const { loading, user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
	const { data: tickets = [] } = useQuery({
		queryKey: ["tickets"],
		enabled: !loading,
		queryFn: async () => {
			const tickets = await axiosSecure(
				`get-user-ticket/?email=${user?.email}`
			);
			return tickets.data;
		},
	});

	return { tickets };
};

export default useUserTickets;
