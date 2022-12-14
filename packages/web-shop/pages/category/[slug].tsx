import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Category from "../../util/shop/Category.interface";
import Frame from "../../util/shop/components/frame/Frame.component";
import ItemCards from "../../util/shop/components/ItemCards.component";
import { SHOP_DATA } from "../../util/shop/data/shop.data";
import Slug from "../../util/shop/Slug.interface";

const CategoryPage: NextPage<Category> = (category) => {
    return <Frame categorySlug={category.slug}>
        <h1>{category.name}</h1>
        <ItemCards items={category.items} />
    </Frame>
}

export default CategoryPage;

export const getStaticProps: GetStaticProps<Category, Slug> = async ({ params }) => {
    if (!params) {
        throw new Error("Params not set!");
    }

    const category = SHOP_DATA.categories
        .find((category) => params.slug === category.slug);

    if (!category) {
        throw new Error("Category doesn't exist!")
    }

    return {
        props: category
    };
}

export const getStaticPaths: GetStaticPaths<Slug> = async () => {
    return {
        paths: SHOP_DATA.categories
            .map((category: Category) => { return { params: { slug: category.slug } } }),
        fallback: false
    }
}