function ListGroup() {
	const items = ["China", "Japan", "South Korea", "Brazil", "Argentina"];

	const listItems = items.map((item) => (
		<li
			className="list-group-item"
			key={item}
			onClick={() => console.log(item)}
		>
			{item}
		</li>
	));

	const getMessage = (itemList: string[]) => {
		return itemList.length === 0 && <p>no items</p>;
	};

	return (
		<>
			<h1>wow yes</h1>
			{getMessage(items)}
			<ul className="list-group">{listItems}</ul>
		</>
	);
}

export default ListGroup;
