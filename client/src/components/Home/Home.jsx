import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    const { categories, setCategories, products, setProducts } = useContext(Context);

    // Define functions before they are used
    const getProducts = async () => {
        const res = await fetchDataFromApi("/api/products?populate=*");
        console.log(res);
        setProducts(res);
    };

    const getCategories = async () => {
        const res = await fetchDataFromApi("/api/categories?populate=*");
        console.log(res);
        setCategories(res);
    };

    useEffect(() => {
        getProducts();
        getCategories();
    }, []); // Empty dependency array ensures this runs once after initial render

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products products={products} headingText="Popular Products" />
                </div>
            </div>
        </div>
    );
};

export default Home;
