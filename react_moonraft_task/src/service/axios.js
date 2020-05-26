import axios from 'axios';


//  this instances are used if there are multiple baseurl's(or diff properties) for different components

const axiosInstance = axios.create({
    baseURL = 'https://react-task-moonraft-0.firebaseio.com/'
});




export default axiosInstance