import React from "react";
import Item from "../Item.interface";
import ItemCard from "./ItemCard.component";

interface Props {
    items: Item[]
}

interface State { }

export default class ItemCards extends React.Component<Props, State> {
    render(): JSX.Element {
        return <div className="item-cards">
            {this.props.items.map((item) => <ItemCard key={item.slug} item={item} />)}
        </div>
    }
}