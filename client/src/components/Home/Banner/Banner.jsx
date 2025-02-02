import React from "react";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import jwelImg from "../../../assets/2.png";
import model from "../../../assets/model.png";


const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio modi doloribus repudiandae sapiente illum facere repellat delectus distinctio corporis reprehenderit 
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={model} alt="" />
            </div>
        </div>
    );
};

export default Banner;
