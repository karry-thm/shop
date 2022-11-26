import { useSession } from "next-auth/react";
import React from "react";
import Slug from "../../Slug.interface";
import Header from "./Header.component";
import Sidebar from "./Sidebar.components";

interface Props {
    categorySlug?: string,
    children: JSX.Element | JSX.Element[]
}

export default function Frame(props: Props): JSX.Element {
    return <div id="frame">
        <Header />
        <div id="content">{props.children}</div>
        <Sidebar slug={props.categorySlug}/>
        <footer id="footer">Footer</footer>
    </div>
}