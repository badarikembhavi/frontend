import axios from "axios";
import { error } from "console";

const axiosServices = axios.create({baseURL: process.env.REACT_APP_API_URL || 'http://localhost:9090/v1'})

axiosServices.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error?.response?.status === 401 && !window?.location?.href?.includes('/login')){
            window.location.pathname = '/login'
        }
        return Promise.reject((error.response && error.response.data) || 'Wrong Services')
    }
)
export default axiosServices;