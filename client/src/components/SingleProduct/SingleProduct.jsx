import React from "react";
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCartPlus, } from "react-icons/fa";

import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters] [id]=${id}`);

    if (!data) return;
    const product = data.data[0].attributes;
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img
                            src={
                                product.img.data[0].attributes.url.startsWith('http')
                                    ? product.img.data[0].attributes.url
                                    : process.env.REACT_APP_DEV_URL + product.img.data[0].attributes.url
                            }
                            alt={product.title}
                        />

                    </div>
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="price">&#8377;{product.price}</span>
                        <span className="desc">{product.desc}</span>

                        <div className="cart-buttons">
                            <div className="quantity-button">
                                <span>-</span>
                                <span>5</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart-button">
                                <FaCartPlus />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider" />

                        <div className="info-item">
                            <span className="text-bold">
                                Category:{" "}
                                <span>{product.categories.data[0].attributes.title}</span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                </span>
                            </span>
                        </div>

                    </div>
                </div>

                <RelatedProducts
                    productId={id}
                    categoryId={product.categories.data[0].id}
                />
            </div>
        </div>
    );
};

export default SingleProduct;
