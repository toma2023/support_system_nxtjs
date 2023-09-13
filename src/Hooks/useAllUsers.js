import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data:users=[], refetch} = useQuery({
        queryKey: ['all-user'],
        queryFn: async () => {
            const result = await axiosSecure("get-all-user");
            return result.data;
        }
    })

    return { users , refetch};
};

export default useAllUsers;