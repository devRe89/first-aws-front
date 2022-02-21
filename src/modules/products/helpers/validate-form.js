
export default function validateFormInputs(inputs) {
    let errors = {};
    if ( ('name' in inputs) && inputs.name === '' ){
        errors.name = 'El Nombre es requerido'
    }
    return errors;
}