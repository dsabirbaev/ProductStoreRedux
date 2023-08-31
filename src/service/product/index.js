import api from "../axios";


const productAPI = {
    getProduct: async () => api.get('/products'),
    getProductItem: async (id) => api.get(`/products/${id}`)
}

export default productAPI;