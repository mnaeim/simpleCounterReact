import React from "react";
//create your first component
const SecondsCounter = () => {
	return (
		<div classname="bigCounter">
			<div className="calender">
				<i className="far fa-clock"></i>
			</div>
			<div className="four">0</div>
			<div className="three">0</div>
			<div className="two">0</div>
			<div className="one">0</div>
		</div>
	);
};

export default SecondsCounter;
