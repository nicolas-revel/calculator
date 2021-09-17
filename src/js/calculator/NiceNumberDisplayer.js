import AmazingNumberButton from "./AmazingNumberButton";

const NiceNumberDisplayer = (props) => {
	const numbers = props.numbers;
	return numbers.map((number) => {
		return (
			<AmazingNumberButton
				value={number}
				key={number}
				className={"number--button number--button__" + number}
                handleClick={props.handleClick}
			></AmazingNumberButton>
		);
	});
};

export default NiceNumberDisplayer;
