import Link from "next/link";
import { SHOP_DATA } from "../../data/shop.data"

export default function Sidebar(selected: { slug?: string }) {
    const { categories } = SHOP_DATA;
    return <div id="sidebar">
        <ul>
            {categories.map((category) => <li key={category.slug}>
                <Link
                    className={selected.slug === category.slug ? "active" : ""}
                    href={`/category/${category.slug}`}>
                    {category.name}
                </Link>
            </li>)}
        </ul>
    </div>
}