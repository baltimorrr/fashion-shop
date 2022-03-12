import React from 'react'
import Helmet from '../components/Helmet'
import Product from '../components/Product'

const Catalog = () => {
    return (
        <Helmet title='Catalog'>
            <div className="catalog">
                <Product showHeading={false} />
            </div>
        </Helmet>
    )
}

export default Catalog
