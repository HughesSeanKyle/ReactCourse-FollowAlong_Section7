import axios from 'axios';
import { AuthKey } from '../config/keys';

export default axios.create({ //1
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: AuthKey
    }
});

/*
//1 - Will create instance of axios client with a couple of defaulted properties.
*/