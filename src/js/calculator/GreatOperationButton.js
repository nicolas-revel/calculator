import React from "react";

const GreatOperationButton = (props) => {
	
    return (
		<button
			value={props.value}
			id={props.value}
			className={props.className}
			onClick={() => {props.handleClick(props.value.toString())}}
		>
			{props.value}
		</button>
	);
};

export default GreatOperationButton;
