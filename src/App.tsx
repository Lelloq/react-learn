import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
	const items = ["China", "Japan", "South Korea", "Brazil", "Argentina"];
	const [text, changeText] = useState("A Button");

	const defaultState = "A button";
	const clicked = "Clicked";

	const handleSelectItem = (item: string) => {
		console.log("selected ", item);
	};

	const handleClick = () => {
		changeText(clicked);
		setTimeout(() => {
			changeText(defaultState);
		}, 1000);
	};

	return (
		<div>
			<ListGroup
				items={items}
				heading="Countries"
				onSelectItem={handleSelectItem}
			/>
			<Alert>
				<span>Test alerta</span>
			</Alert>
			<Button text={text} onClick={handleClick} />
		</div>
	);
}

export default App;
