import React from "react";
import Item from "../Item.interface";

interface Props {
    item: Item
}
interface State { }

export default class ItemDetails extends React.Component<Props, State> {
    render(): JSX.Element {
        return <div className="item-details">
            <div className="title">{this.props.item.name}</div>
            <div className="description">{this.props.item.description}</div>
        </div>
    }
}