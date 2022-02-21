import React from 'react';
import useValidatorForm from '../../../custom-hooks/useValidatorForm';
import { createProduct } from '../services/productsActions';
import { useNavigate } from 'react-router-dom';


const initState = {
    name: ''
}

const Create = () => {
    const navigate = useNavigate();
    const {
        state,
        errors,
        handlerSubmit,
        handlerChange
    } = useValidatorForm(initState, addNewProduct);
    const { name } = state;

    function addNewProduct() {
        const body = {
            name
        }
        createProduct(body);
        navigate('/');
    }

    return (
        <div className="container mt-5">
            <div className="content-body">
                <h4>Crear producto</h4>
                <form
                    onSubmit={handlerSubmit}
                    className="mt-3"
                >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nombre</label>
                        <input 
                            type="text" 
                            className="form-control"
                            onChange={handlerChange}
                            name="name"
                            value={name} 
                        />
                        {errors.name && errors.name}
                    </div>
                    <div className="form-group mt-3">
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                        >Crear</button>
                    </div>
                </form>
            </div>
        </div> 
     );
}
 
export default Create;