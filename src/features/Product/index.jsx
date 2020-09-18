import Footer from 'components/Footer'
import Header from 'components/Header'
import Banner from 'features/Product/Banner'
import React from 'react'
import ProductList from './ProductList'

function Product(props) {
    return (
        <section className="product">
            <Header/>
            <Banner/>
            <ProductList/>
            <Footer/>
        </section>
    )
}

Product.propTypes = {

}

export default Product

