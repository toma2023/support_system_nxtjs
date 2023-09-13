
const Button = ({ data, bg, textColor, disabled }) => {
	return (
		<button
			disabled={disabled}
			className={`${bg} ${textColor} py-[8px] px-5 rounded-md hover-effect`}
		>
			{data}
		</button>
	);
};

export default Button;