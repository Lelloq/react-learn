import { useState } from "react";

function ListGroup() {
	const items = ["China", "Japan", "South Korea", "Brazil", "Argentina"];
	const [selected, setSelectedIndex] = useState(-1);

	const listItems = items.map((item, index) => (
		<li
			className={
				selected === index
					? "list-group-item active"
					: "list-group-item"
			}
			key={index}
			onClick={() => {
				setSelectedIndex(index);
			}}
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
