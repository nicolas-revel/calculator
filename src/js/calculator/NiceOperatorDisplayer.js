import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";

const NiceOperatorDisplayer = (props) => {
	const operators = props.operators;
	return operators.map((operator) => {
		if ("=" === operator) {
			return (
				<MagnificientEqualButton
					value={operator}
					className={"operator--button operator--button__" + operator}
					key={operator}
                    handleClick={props.handleClick}
				></MagnificientEqualButton>
			);
		} else {
			return (
				<GreatOperationButton
					key={operator}
					className={"operator--button operator--button__" + operator}
					value={operator}
                    handleClick={props.handleClick}
				></GreatOperationButton>
			);
		}
	});
};

export default NiceOperatorDisplayer;
