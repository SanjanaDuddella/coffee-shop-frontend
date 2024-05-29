import axios from "axios";

const API_URI = 'http://localhost:8080/api/coffee';

class CoffeeService 
{
    getAllProducts()
    {
        return axios.get(API_URI);
    }
    getProductByID(id)
    {
        return axios.get('${API_URI}/${id}');
    }
    addProduct(product)
    {
        return axios.post(API_URI, product);
    } 
    updateProduct(id,product)
    {
        return axios.put('${API_URI}/${id}', product);
    }
    deleteProd(id)
    {
        return axios.delete('${API_URI}/${id}');
    }
}

export default new CoffeeService();