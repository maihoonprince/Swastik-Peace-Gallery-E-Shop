import axios from "axios";

const params = {
    headers: {
        Authorization: `bearer ${process.env.REACT_APP_STRAPI_APP_KEY}`,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        // Construct the final URL safely
        const apiUrl = `${process.env.REACT_APP_DEV_URL}${url}`.replace(/([^:]\/)\/+/g, "$1");
        const { data } = await axios.get(apiUrl, params);
        return data;

    } catch (error) {
        console.error("Error fetching data from API:", error.response?.data || error.message);
        return error;
    }
};
