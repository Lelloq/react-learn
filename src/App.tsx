import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
	const items = ["China", "Japan", "South Korea", "Brazil", "Argentina"];
	const [text, changeText] = useState("A Button");
	const [alertVisible, setAlertVisibility] = useState(false);

	const defaultState = "A button";
	const clicked = "Clicked";

	const handleSelectItem = (item: string) => {
		console.log("selected ", item);
	};

	const handleClick = () => {
		changeText(clicked);
		setAlertVisibility(true);
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
			{alertVisible && (
				<Alert
					onClose={() => {
						setAlertVisibility(false);
					}}
				>
					Test alerta
				</Alert>
			)}
			<Button text={text} onClick={handleClick} />
		</div>
	);
}

export default App;
