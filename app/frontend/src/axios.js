import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:5500/' // 'http://lb-dell-connect-1824529450.us-east-1.elb.amazonaws.com/'
})

export default instance;
