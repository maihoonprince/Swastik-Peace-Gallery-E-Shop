import React from "react";
import "./About.scss";
import owner from "../../../assets/owner.jpeg";

const About = () => {
    return (
        <div className="about-container">
            <div className="owner-section">
                <img 
                    src={owner} 
                    alt="Owner" 
                    className="owner-image"
                />
                <div className="owner-details">
                    <h2>John Doe</h2>
                    <p>Founder & Owner</p>
                    <p>John Doe has over 15 years of experience in the jewelry industry...</p>
                </div>
            </div>
            <div className="shop-details">
                <h3>About Our Shop</h3>
                <p>We are a government-authorized jewelry store with a wide range of certified products...</p>
                <p>Location: 123 Market Street, City, Country</p>
                <p>License No: ABC123XYZ</p>
            </div>
        </div>
    );
};

export default About;
