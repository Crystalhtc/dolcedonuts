import ProductCard from "../components/ProductCard/ProductCard"
import { products } from "../Data/products"
import './Order.css'

export default function Order() {

    const donutList = products.map((product, index) => {
        return(
            product.category === 'donuts' &&
                <ProductCard key={index} name={product.name} price={product.price} image_url={product.image_url} showDetails={true} />       
        )
    })
    const bakeryList = products.map((product, index) => {
        return(
            product.category === 'bakery' &&
                <ProductCard key={index} name={product.name} price={product.price} image_url={product.image_url} showDetails={true} />       
        )
    })
    const drinkList = products.map((product, index) => {
        return(
            product.category === 'drink' &&
                <ProductCard key={index} name={product.name} price={product.price} image_url={product.image_url} showDetails={true} />       
        )
    })
    return(
        <div className="outerContainer">
            <div>
                <h1>Our menu</h1>
            </div>
            <div className="categories">
                <a href="#donuts" className="category"><img src="donut-icon.svg" /><h2>Donuts</h2></a>
                <a href="#bakery" className="category"><img src="bread-icon.svg" /><h2>Bakery</h2></a>
                <a href="#drinks" className="category"><img src="drink-icon.svg" /><h2>Drinks</h2></a>
            </div>
            <div className="sectionTitle"><h1>Assorted</h1></div>

            <div className="sectionTitle"><h1>Donuts</h1></div>
            <div id="donuts" className="innerContainer">
                {donutList}
            </div>

            <div className="sectionTitle"><h1>Bakery</h1></div>
            <div id="bakery" className="innerContainer">
                {bakeryList}
            </div>

            <div className="sectionTitle"><h1>Drinks</h1></div>
            <div id="drinks" className="innerContainer">
                {drinkList}
            </div>
        </div>
    )
}