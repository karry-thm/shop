import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Item from "../../util/shop/Item.interface";
import { SHOP_DATA } from "../../util/shop/data/shop.data";
import Slug from "../../util/shop/Slug.interface";

const ItemPage: NextPage<Item> = (item) => {
    return <div>
        <h1>{item.name}</h1>
    </div>
}

export default ItemPage;

export const getStaticProps: GetStaticProps<Item, Slug> = async ({ params }) => {
    if (!params) {
        throw new Error("Params not set!");
    }

    const item = SHOP_DATA.categories
        .map((category) => category.items)
        .reduce((prev, current) => prev.concat(current), [])
        .find((item) => item.slug === params.slug);

    if (!item) {
        throw new Error("Item doesn't exist!")
    }

    return {
        props: item
    };
}


export const getStaticPaths: GetStaticPaths<Slug> = async () => {
    return {
        paths: SHOP_DATA.categories
            .map((category) => category.items)
            .reduce((prev, current) => prev.concat(current), [])
            .map((item: Item) => { return { params: { slug: item.slug } } }),
        fallback: false
    }
}