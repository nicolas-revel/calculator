import React, { useState, useEffect } from "react";
import BeautifullScreen from "./BeautifullScreen";
import ItSOverNineThousand from "./ItSOverNineThousand";
import NiceNumberDisplayer from "./NiceNumberDisplayer";
import NiceOperatorDisplayer from "./NiceOperatorDisplayer";

const Calculator = () => {
	const [items, setItems] = useState("");
	const [result, setResult] = useState("");
	const [overload, setOverload] = useState(false);

	const addNumber = (number) => {
		return setItems(items + number);
	};

	const addOperator = (operator) => {
		return setItems(items + " " + operator + " ");
	};

	const clearItems = () => {
		return setItems("");
	};

	const clearResult = () => {
		return setResult("");
	};

	const removeLastChar = () => {
		return setItems(items.slice(0, items.length - 1));
	};

	const calc = () => {
		let operation = items
			.replace("x", "*")
			.replace("÷", "/")
			.replace("%", "/100");
		setItems("");
		let nonRoundedResult = eval("" === operation ? 0 : operation);
		setResult(nonRoundedResult);
		
	};

	useEffect(() => {
		checkOverload(result);
		return;
	});

	const checkOverload = (overloadToCheck) => {
		if (9000 <= overloadToCheck) {
			return setOverload(true);
		} else {
			return setOverload(false);
		}
	};

	const handleClick = (value) => {
		switch (value) {
			case "=":
				calc();
				break;
			case "+":
			case "x":
			case "-":
			case "%":
			case "÷":
				addOperator(value);
				break;
			case "C":
				"" === items ? clearResult() : clearItems();
				break;
			case "⌫":
				removeLastChar();
				break;
			default:
				addNumber(value);
		}
	};

	return (
		<>
			<div className="calculator">
				<BeautifullScreen
					items={items}
					result={result}
				></BeautifullScreen>
				<div className="calculator--pad">
					<NiceOperatorDisplayer
						operators={["C", "⌫", "%", "÷"]}
						className="calculator--pad--top_row"
						handleClick={handleClick}
					></NiceOperatorDisplayer>
					<NiceOperatorDisplayer
						operators={["x", "-", "+", "="]}
						operatorsId={["multiply", "minus", "plus", "equal"]}
						className="calculator--pad--bottom_row--operators"
						handleClick={handleClick}
					></NiceOperatorDisplayer>
					<NiceNumberDisplayer
						numbers={[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."]}
						className="calculator--pad--bottom_row--numbers"
						handleClick={handleClick}
					></NiceNumberDisplayer>
				</div>
			</div>
			{true === overload && (
				<ItSOverNineThousand className="overload"></ItSOverNineThousand>
			)}
		</>
	);
};

export default Calculator;
