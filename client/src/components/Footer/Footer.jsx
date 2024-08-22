import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

import "./Footer.scss";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">

                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti, magnam blanditiis, tempore ad cumque magni veritatis quam corrupti quaerat
                    </div>
                </div>

                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Govindpuri, Modinagar, Ghaziabad, UP, 201201
                        </div>                       
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone: +91-1234567890
                        </div>                       
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            Email: store@gmail.com
                        </div>                       
                    </div>
                </div>

                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speaker</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Threater</span>
                    <span className="text">Projectors</span>
                </div>

                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>

            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        Swastik Store 2024 CREATED BY PRINCE.
                    </div>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
