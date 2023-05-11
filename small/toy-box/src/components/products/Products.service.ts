import Http from '../../services/Http.service';

import axios from "axios";

export interface Product {
    name: string;
    id: number;
    price: number;
    description: string;
    image: string;
    category: string;
}

const ProductsService = {
    get: function(options: HttpGetOptions) {
        return axios.get(`${options.url}`);
    },

};

export default ProductsService;