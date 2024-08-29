import { useNavigate } from "react-router-dom";

import "./Category.scss";

const Category = ({ categories }) => {

    const navigate = useNavigate();

    // Check if categories or categories.data is undefined or null
    if (!categories || !categories.data) {
        return <div>No categories available</div>;
    }

    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div
                        key={item.id}
                        className="category"
                        onClick={() => navigate(`/category/${item.id}`)}
                    >
                        <img
    src={
        (item.attributes?.img?.data?.attributes?.url 
            ? item.attributes.img.data.attributes.url 
            : "default-image.jpg")
    }
    alt={item.attributes?.name || "Category Image"}
/>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
