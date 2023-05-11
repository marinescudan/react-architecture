import axios from "axios";

export interface HttpGetOptions {
    url: string;
}

const HttpService = {
    get: function(options: HttpGetOptions) {
        return axios.get(`${options.url}`);
    },

    // post: function(options: HttpPostOptions) {
    //     return axios.post(options.url, options.data);
    // },

    // put: function(options: HttpPutOptions) {
    //     return axios.put(options.url, options.data);
    // },

    // delete: function(options: HttpDeleteOptions) {
    //     return axios.delete(options.url);
    // }


};

export default HttpService;