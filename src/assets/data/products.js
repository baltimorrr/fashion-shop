const product_image_01_1 = require('../images/products/product-01-1.jpg').default
const product_image_01_2 = require('../images/products/product-01-2.jpg').default
const product_image_01_3 = require('../images/products/product-01-3.jpg').default

const product_image_02_1 = require('../images/products/product-02-1.jpg').default
const product_image_02_2 = require('../images/products/product-02-2.jpg').default
const product_image_02_3 = require('../images/products/product-02-3.jpg').default

const product_image_03_1 = require('../images/products/product-03-1.jpg').default
const product_image_03_2 = require('../images/products/product-03-2.jpg').default
const product_image_03_3 = require('../images/products/product-03-3.jpg').default

const product_image_04_1 = require('../images/products/product-04-1.jpg').default
const product_image_04_2 = require('../images/products/product-04-2.jpg').default
const product_image_04_3 = require('../images/products/product-04-3.jpg').default

const product_image_05_1 = require('../images/products/product-05-1.jpg').default
const product_image_05_2 = require('../images/products/product-05-2.jpg').default
const product_image_05_3 = require('../images/products/product-05-3.jpg').default

const product_image_06_1 = require('../images/products/product-06-1.jpg').default
const product_image_06_2 = require('../images/products/product-06-2.jpg').default
const product_image_06_3 = require('../images/products/product-06-3.jpg').default

const product_image_07_1 = require('../images/products/product-07-1.jpg').default
const product_image_07_2 = require('../images/products/product-07-2.jpg').default
const product_image_07_3 = require('../images/products/product-07-3.jpg').default

const product_image_08_1 = require('../images/products/product-08-1.jpg').default
const product_image_08_2 = require('../images/products/product-08-2.jpg').default
const product_image_08_3 = require('../images/products/product-08-3.jpg').default

const product_image_09_1 = require('../images/products/product-09-1.jpg').default
const product_image_09_2 = require('../images/products/product-09-2.jpg').default
const product_image_09_3 = require('../images/products/product-09-3.jpg').default


const products = [
    {
        title: 'Long Sleeve Slit T-shirt',
        price: '499000',
        image01: product_image_01_1,
        image02: product_image_01_2,
        image03: product_image_01_3,
        category: 'women',
        colors: ['white', 'gray', 'black', 'orange', 'purple'],
        size: ['s', 'm', 'l', 'xxl'],
        slug: 'women-01',
        describe: 'Long-sleeve T-shirt with added sun protection. A versatile wardrobe essential'
    },
    {
        title: 'Crew Neck Long Sleeve T-shirt',
        price: '499000',
        image01: product_image_02_1,
        image02: product_image_02_2,
        image03: product_image_02_3,
        category: 'women',
        colors: ['white', 'gray', 'black', 'pink', 'green'],
        size: ['s', 'm', 'l', 'xl'],
        slug: 'women-02',
        describe: 'Our high-performance T-shirt for sports or everyday wear'
    },
    {
        title: 'Fleece Turtleneck Long Sleeve T-Shirt',
        price: '399000',
        image02: product_image_03_1,
        image01: product_image_03_2,
        image03: product_image_03_3,
        category: 'women',
        colors: ['white', 'black', 'beige'],
        size: ['xs', 'm'],
        slug: 'women-03',
        describe: 'In response to customer feedback, the body has been updated for a more relaxed fit'
    },

    {
        title: 'Boat Neck Sweater',
        price: '799000',
        image01: product_image_04_1,
        image02: product_image_04_2,
        image03: product_image_04_3,
        category: 'women',
        colors: ['beige'],
        size: ['s', 'm', 'l'],
        slug: 'women-04',
        describe: 'Comfortable knit with a springy texture. Slit hems for easy layering'
    },
    {
        title: 'Oversized Rugger Shirt',
        price: '799000',
        image01: product_image_05_1,
        image02: product_image_05_2,
        image03: product_image_05_3,
        category: 'men',
        colors: ['blue', 'gray'],
        size: ['s'],
        slug: 'men-01',
        describe: 'A rugby shirt with a quintessential JWA style. Features a striking stripe design'
    },
    {
        title: 'French Rib Cardigan',
        price: '999000',
        image02: product_image_06_1,
        image01: product_image_06_2,
        image03: product_image_06_3,
        category: 'men',
        colors: ['gray', 'black'],
        size: ['s', 'm'],
        slug: 'men-02',
        describe: 'A versatile cardigan with an elegant texture and a classic design.'
    },
    {
        title: 'Oversized Stand Collar Shirt',
        price: '489000',
        image01: product_image_07_1,
        image02: product_image_07_2,
        image03: product_image_07_3,
        category: 'men',
        colors: ['white', 'gray', 'black'],
        size: ['m', 'l'],
        slug: 'men-03',
        describe: 'A sophisticated shirt with minimalist design.'
    },
    {
        title: 'UV Protection Compact Umbrella',
        price: '391000',
        image01: product_image_08_1,
        image02: product_image_08_2,
        image03: product_image_08_3,
        category: 'accessories',
        colors: ['black', 'navy'],
        size: [],
        slug: 'accessories-01',
        describe: 'A convenient folding umbrella for both sunny and rainy days. Compact yet strong.'
    },
    {
        title: 'Mini Shoulder Bag',
        price: '499000',
        image02: product_image_09_1,
        image01: product_image_09_2,
        image03: product_image_09_3,
        category: 'accessories',
        colors: ['black', 'brown'],
        size: [],
        slug: 'accessories-02',
        describe: 'The perfect size for a quick outing. Three pocket design provides neat storage.'
    },
    //12 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
}

export default productData

/*
white
gray
black
orange
purple
pink
green
brown
navy

*/