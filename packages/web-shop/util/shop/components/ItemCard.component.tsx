import React from "react";
import Item from "../Item.interface";

interface Props {
    item: Item
}
interface State { }

export default class ItemCard extends React.Component<Props, State> {
    render(): JSX.Element {
        const { item } = this.props;
        return <div className="item-card">
            <div className="title">{item.name}</div>
            <div className="description">{item.description}</div>
        </div>
    }
}