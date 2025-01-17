import { useState } from "react";

interface ListProps {
	items: string[];
	heading: string;
}

function ListGroup(props: ListProps) {
	const { items, heading } = props;
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
			<h1>{heading}</h1>
			{getMessage(items)}
			<ul className="list-group">{listItems}</ul>
		</>
	);
}

export default ListGroup;
