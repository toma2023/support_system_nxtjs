import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: role = [] } = useQuery({
        queryKey: ['role'],
        enabled: !loading,
        queryFn: async () => {
            const result = await axiosSecure(`get-user-role/?email=${user?.email}`);
            return result.data;
        }
    })

    return { role };
};

export default useRole;