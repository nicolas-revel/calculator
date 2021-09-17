import React from "react";

const AmazingNumberButton = (props) => {
	return (
		<button
			value={props.value}
			id={props.value}
			className={props.className}
			onClick={() => {props.handleClick(props.value)}}
		>
			{props.value}
		</button>
	);
};

export default AmazingNumberButton;
