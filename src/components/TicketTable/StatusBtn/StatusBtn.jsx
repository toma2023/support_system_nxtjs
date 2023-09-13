
const StatusBtn = ({ status }) => {
	return (
		<div
			className={`${
				status === "Close"
					? "text-[#B3B5B5] border-[#B3B5B5]  hover:bg-[#B3B5B5]"
					: status === "Answered"
					? "text-[#2196F3] border-[#2196F3] hover:bg-[#2196F3]  "
					: status === "In Progress"
					? "text-[#E7515A] border-[#E7515A] hover:bg-[#E7515A]"
					: "text-[#1B55E2] border-[#1B55E2] hover:bg-[#1B55E2] "
			} hover:text-white border  text-center py-[2px] px-2 rounded-md mx-auto hover-effect`}
		>
			{status}
		</div>
	);
};

export default StatusBtn;