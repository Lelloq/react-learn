import { useState } from "react";

const Button = () => {
	const [text, changeText] = useState("A Button");
	const defaultState = "A button";
	const clicked = "Clicked";

	return (
		<button
			className="btn btn-primary"
			onClick={() => {
				changeText(clicked);
				setTimeout(() => {
					changeText(defaultState);
				}, 1000);
			}}
		>
			{text}
		</button>
	);
};

export default Button;
