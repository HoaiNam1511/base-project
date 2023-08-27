import axios from "axios";

import isServerSide from "@/utils/isServerSide";

const axiosClient = axios.create({
    baseURL: isServerSide() ? "/api" : `${window.location.origin}/api/`,
    headers: {
        "Content-Type": "Application/json",
    },
});

export default axiosClient;
