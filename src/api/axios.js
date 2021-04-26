import axios from 'axios';
import { getToken } from '../services/authservice';

const instance = axios.create({
    baseURL: 'http://localhost:8000'
});
//Need to load token from instance
const token = getToken()
instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default instance;