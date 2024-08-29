import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import Search from "./Search/Search";
import "./Header.scss";

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")} >Home</li>
                        <li onClick={() => navigate("/about")} >About</li>
                    </ul>
                    <div
                        className="center"
                        onClick={() => navigate("/")}
                    >
                        Swastik.
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setShowSearch(true)} />
                    </div>
                </div>
            </header>

            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    );
};

export default Header;
