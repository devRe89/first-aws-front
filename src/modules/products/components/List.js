import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Spinner from '../../shared/components/Spinner';
import { getAllProducts } from '../services/productsActions.js';

const List = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProductsActions = async () => {
            const res = await getAllProducts();
            setProducts(res);
        }
        getProductsActions();
    },[products]);



    return ( 
       <div className="container mt-5">
           <div className="content-body">
               {products.productsArr ? 
               (
                   <>
                    <h4>Mis Productos</h4>
                    <ul>
                        {
                            products.productsArr.map(product => (
                                <Product 
                                    key={product.id}
                                    product={product}
                                />
                            ))  
                        }
                    </ul>
                   </>

               )
               : (
                   <Spinner />

               )}
           </div>
       </div>
    );
}
 
export default List;