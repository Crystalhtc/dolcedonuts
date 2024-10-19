import ProductCard from "../components/ProductCard/ProductCard"
import { products } from "../Data/products"
import './Order.css'

export default function Menu() {

    const donutList = products.map((product, index) => {
        return(
            product.category === 'donuts' &&
                <ProductCard key={index} id={product.id} name={product.name} price={product.price} image_url={product.image_url} showDetails={false} />       
        )
    })
    const bakeryList = products.map((product, index) => {
        return(
            product.category === 'bakery' &&
                <ProductCard key={index} id={product.id} name={product.name} price={product.price} image_url={product.image_url} showDetails={false} />       
        )
    })
    const drinkList = products.map((product, index) => {
        return(
            product.category === 'drink' &&
                <ProductCard key={index} id={product.id} name={product.name} price={product.price} image_url={product.image_url} showDetails={false} />       
        )
    })
    // bring to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    // bring to section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if(section) {
            section.scrollIntoView({ behavior: 'smooth'});
        }
    }
    return(
        <div className="outerContainer">
            <button onClick={scrollToTop} id="bringToTop"><img src="triangle-icon.svg" alt="Bring to top"/></button>
            <div>
                <h1>Our menu</h1>
            </div>
            <div className="categories">
                <button className="category" onClick={() => scrollToSection('donuts')}>
                    <img src="donut-icon.svg" alt="Link to Donuts section"/><h2>Donuts</h2>
                </button>
                <button className="category" onClick={() => scrollToSection('bakery')}>
                    <img src="bread-icon.svg" alt="Link to Bakery section"/><h2>Bakery</h2>
                </button>
                <button className="category" onClick={() => scrollToSection('drinks')}>
                    <img src="drink-icon.svg" alt="Link to drinks section"/><h2>Drinks</h2>
                </button>
            </div>

            <div id="donuts" className="sectionTitle"><h1>Donuts</h1></div>
            <div className="innerContainer">
                {donutList}
            </div>

            <div id="bakery" className="sectionTitle"><h1>Bakery</h1></div>
            <div className="innerContainer">
                {bakeryList}
            </div>

            <div id="drinks" className="sectionTitle"><h1>Drinks</h1></div>
            <div className="innerContainer">
                {drinkList}
            </div>
        </div>
    )
}