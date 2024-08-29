import React from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setShowSearch }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    let { data } = useFetch(
        `/api/products?populate=*&filters[title][$contains]=${query}`
    );

    // If query is empty, set data to null
    if (!query.length) {
        data = null;
    }

    return (
        <div className="search-model">
            <div className="form-field">
                <input
                    type="text"
                    autoFocus
                    placeholder="Search for Product"
                    value={query}
                    onChange={onChange}
                />
                <MdClose onClick={() => setShowSearch(false)} />
            </div>

            <div className="search-result-content">
                <div className="search-results">
                    {data?.data?.map((item) => {
                        // Check if img.data[0] exists before accessing it
                        const imgUrl = item.attributes.img?.data?.[0]?.attributes?.url;
                        return (
                            <div 
                                key={item.id} 
                                className="search-result-item" 
                                onClick={() => navigate("/product/" + item.id)}
                            >
                                <div className="img-container">
                                    {imgUrl ? (
                                        <img
                                            src={process.env.REACT_APP_DEV_URL + imgUrl}
                                            alt={item.attributes.title || "Product Image"}
                                        />
                                    ) : (
                                        <div className="placeholder">No Image Available</div>
                                    )}
                                </div>
                                <div className="prod-details">
                                    <div className="name">{item.attributes.title}</div>
                                    <div className="desc">{item.attributes.desc}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Search;
