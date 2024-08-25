import "./Category.scss";

const Category = ({ categories }) => {
    // Check if categories or categories.data is undefined or null
    if (!categories || !categories.data) {
        return <div>No categories available</div>;
    }

    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories.data.map((item) => (
                    <div key={item.id} className="category">
                        <img
                            src={
                                process.env.REACT_APP_DEV_URL +
                                item.attributes?.img?.data?.attributes?.url || "default-image.jpg"
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
