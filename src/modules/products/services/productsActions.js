import axiosClient from '../../../config-axios/axios';



const createProduct = async (productName) => {

    try {
        const headers = {
            'Content-Type': 'application/json', 
        };
        const response = await axiosClient.post('/api', productName, {
            headers: headers
        });

        console.log(response);
    } catch (error) {
        console.log('error')
        console.log(error);
    }
}

const getAllProducts = async () => {

    try {
        const headers = {
            'Content-Type': 'application/json', 
        };
        const response = await axiosClient.get('/api/all-products', {
            headers: headers
        });
        
        return response.data;
    } catch (error) {
        console.log('error')
        console.log(error);
    }
}

export {
    createProduct,
    getAllProducts
}