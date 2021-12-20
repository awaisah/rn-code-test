import products from "../../assets/products.json"

const getCategories = () => {
    // all unique categories
    const categoryTitles = [...new Set(products.map(product => product.category))];

    // Returns an array of categories
    return categoryTitles.map(title => {
        return {
            title, 
            products: products
                            .filter(product => product.category === title)
                            .sort((a,b) => {
                                return a.order < b.order ? -1 : 1
                            })
        }
    })
}

const getDisplayPrice = (product) => {
    let price = product.price

    let discountedPrice = null

    if (product.discount_type === "amount") {
        discountedPrice = price - product.discount
        discountedPrice = (discountedPrice / 100).toFixed(2)
    } else if (product.discount_type === "percentage") {
        discountedPrice = price * (100 - product.discount) / 100
        discountedPrice = (discountedPrice / 100).toFixed(2)
    }

    if (price == 0.00) {
        price = "FREE"
    } else {
        price = "£"+(product.price / 100).toFixed(2)
    }

    if (discountedPrice == 0.00) {
        discountedPrice = "FREE"
    } else if (discountedPrice) {
        discountedPrice = "£"+discountedPrice
    }

    return {
        price,
        discountedPrice
    }
}

export {getCategories, getDisplayPrice};