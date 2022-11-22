import Shop from "../Shop.interface";

export const SHOP_DATA: Shop = {
    name: "Demo Shop",
    categories: [
        {
            slug: "stuehle",
            name: "Stühle",
            items: [{
                name: "Backforce One",
                slug: "backforce-one",
                description: "Backforce One"
            }, {
                name: "Backforce One Plus",
                slug: "backforce-one-plus",
                description: "Backforce One Plus"
            }]
        }, {
            slug: "tische",
            name: "Tische",
            items: [{
                name: "Leet Desk",
                slug: "leet-desk",
                description: "Leet Desk"
            }, {
                name: "Eliot",
                slug: "eliot",
                description: "Eliot"
            }]
        }
    ]
}