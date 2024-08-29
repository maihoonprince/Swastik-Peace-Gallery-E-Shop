import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState();

    const makeApiCall = async () => {
        try {
            const res = await fetchDataFromApi(endpoint);
            setData(res);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    useEffect(() => {
        makeApiCall();
    }, [endpoint]); // Depend on endpoint to refetch when it changes

    return { data };
};

export default useFetch;
