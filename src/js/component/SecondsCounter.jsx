import React from "react";
import { useState, useEffect } from "react";

const SecondsCounter = () => {
	const [count, setCount] = useState(0);

	setTimeout(() => {
		setCount(count => count + 1);
	}, 1000);

	const number = Math.floor(count / 1000);
	const one = Math.floor(count / 100);
	const two = Math.floor(count / 10);
	const three = Math.floor(count / 1);

	return (
		<div className="bigCounter">
			<div className="calender">
				<i className="far fa-clock"></i>
			</div>
			<div className="four">{number % 10}</div>
			<div className="three">{one % 10}</div>
			<div className="two">{two % 10}</div>
			<div className="one">{three % 10}</div>
		</div>
	);
};

export default SecondsCounter;
