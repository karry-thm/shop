import { ParsedUrlQuery } from "querystring";

export default interface Slug extends ParsedUrlQuery {
    slug: string
}