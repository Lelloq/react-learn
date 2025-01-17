import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
	const items = ["China", "Japan", "South Korea", "Brazil", "Argentina"];

	const handleSelectItem = (item: string) => {
		console.log("selected ", item);
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
		</div>
	);
}

export default App;
