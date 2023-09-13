import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTotalTicket = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data:totalTicket=0 } = useQuery({
        queryKey: ["total-ticket"],
        enabled: !loading,
        queryFn: async () => {
            const result = await axiosSecure(`total-ticket/?email=${user?.email}`);
            return result.data;
        }
    });
    
    console.log(totalTicket , '  total');
    return { totalTicket };
};

export default useTotalTicket;