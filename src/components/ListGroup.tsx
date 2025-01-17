import { MouseEvent } from "react";

function ListGroup() {
	const items = ["China", "Japan", "South Korea", "Brazil", "Argentina"];

	const handleClick = (e: MouseEvent) => console.log(e);

	const listItems = items.map((item, index) => (
		<li className="list-group-item" key={index} onClick={handleClick}>
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
