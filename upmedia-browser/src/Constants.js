const dev_base_url = 'http://localhost:8080/upmedia-backend/';
const prod_base_url = 'https://revealcdb01.eastus.cloudapp.azure.com/upmedia-backend/'
const base_url = process.env.NODE_ENV === 'development' ? dev_base_url : prod_base_url;

const router_base_name = process.env.NODE_ENV === 'development' ? '/' : '/upmedia-browser';
const base_api_url = base_url + "reveal-api/";

export const config = {
    url: {
        REVEAL_API_URL: base_api_url,
        API_URL_DASHBOARDS: base_api_url + 'dashboards',
    },
    routerBasename: router_base_name
};
