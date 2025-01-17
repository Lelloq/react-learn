import ListGroup from "./components/ListGroup";

function App() {
	const items = ["China", "Japan", "South Korea", "Brazil", "Argentina"];

	return (
		<div>
			<ListGroup items={items} heading="Countries" />
		</div>
	);
}

export default App;
