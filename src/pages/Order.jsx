import { useState } from "react"
import ProductCard from "../components/ProductCard/ProductCard"
import { products } from "../Data/products"
import './Order.css'

export default function Order() {
    const [isDonutsExpanded, setIsDonutsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    function handleSearch(event) {
        setSearchQuery(event.target.value.toLowerCase());
    }

    function productList(category, limit) {
        return(
            products
                .filter(product => 
                    product.category === category &&
                    product.name.toLowerCase().includes(searchQuery)
                )
                .slice(0, limit)
                .map((product, index) => {
                    return <ProductCard className="singleCard" key={index} id={product.id} name={product.name} price={product.price} image_url={product.image_url} showDetails={true} />       
                })
        )
    }

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
            <button onClick={scrollToTop} id="bringToTop">
                <img src="triangle-icon.svg" alt="Bring to top"/>
            </button>
            <div className="heading">
                <h1>Our menu</h1>
                <div className="searchBar">
                    <img src="search-icon.svg" alt="Search Icon"/>
                    <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearch} />
                </div>
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
            <div className="sectionTitle"><h1>Assorted</h1></div>
            <div className="innerContainer">
                {productList("assorted")}
            </div>

            <div id="donuts" className="sectionTitle"><h1>Donuts</h1></div>
            <div className="innerContainer">
                {productList("donut", isDonutsExpanded ? products.filter(p => p.category === "donut").length : 8)}
            </div>
            {isDonutsExpanded ? 
                <button onClick={() => setIsDonutsExpanded(false)} className="showMoreButton">View Less</button>
                : <button onClick={() => setIsDonutsExpanded(true)} className="showMoreButton">View More</button>
            }

            <div id="bakery" className="sectionTitle"><h1>Bakery</h1></div>
            <div className="innerContainer">
                {productList("bakery")}
            </div>

            <div id="drinks" className="sectionTitle"><h1>Drinks</h1></div>
            <div className="innerContainer">
                {productList("drink")}
            </div>
        </div>
    )
}