import Item from "./Item.interface";

export default interface Category {
    slug: string,
    name: string,
    items: Item[]
}