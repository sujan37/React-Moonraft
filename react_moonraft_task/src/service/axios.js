import axios from 'axios';


//  this instances are used if there are multiple baseurl's(or diff properties) for different components

const axiosInstance = axios.create({
    baseURL = 'www.google.com'
});

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default axiosInstance