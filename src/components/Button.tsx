import { useState } from "react";

const Button = () => {
	const [text, changeText] = useState("A Button");
	const defaultState = "A button";
	const clicked = "Clicked";

	return (
		<div
			className="btn btn-primary"
			onClick={() => {
				changeText(clicked);
				setTimeout(() => {
					changeText(defaultState);
				}, 1000);
			}}
		>
			{text}
		</div>
	);
};

export default Button;
