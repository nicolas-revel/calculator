const BeautifullScreen = (props) => {
	return (
		<div className="calculator--screen">
			<div className="calculator--screen--items">
				{props.items ? props.items : "0"}
			</div>
			<div className="calculator--screen--result">
				{props.result ? props.result : "0"}
			</div>
		</div>
	);
};

export default BeautifullScreen;
