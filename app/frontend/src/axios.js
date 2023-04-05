import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://prova-lb-489429696.us-east-1.elb.amazonaws.com/'
})

export default instance;
