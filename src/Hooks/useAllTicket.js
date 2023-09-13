import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllTicket = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: tickets = [], refetch } = useQuery({
		queryKey: ["all-ticket"],
		queryFn: async () => {
			const result = await axiosSecure(`get-all-ticket`);
			return result.data;
		},
	});

    return { tickets, refetch };
};

export default useAllTicket;