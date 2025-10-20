import React,{useState} from "react";

function FormValidation () {
    const[empty,setEmpty] = useState({product: false, quantity: false});
    const[product,setProduct] = useState('');
    const[quantity,setQuantity] = useState('');
    
    function vaildate (e) {
        e.preventDefault(); // ✅ Fixes the crash
        setEmpty({
          product: product.trim() === '',
          quantity: quantity.trim() === ''
        });
      }
      
      return (
        <div className="layout-column justify-contents-center align-items-center">
          <section className="card pa-50">
            <form onSubmit={vaildate} className="layout-column" noValidate>
              <label>
              <input
  type="text"
  value={product}
  onChange={(e) => setProduct(e.target.value)}
  data-testid="name-input"
  placeholder="Product name"
/>
                <p className="error-text form-hint" data-testid="name-input-error">
                    {empty.product ? 'Product name is required' : ''}</p>                
              </label>
              <label>
              <input
  type="number"
  value={quantity}
  onChange={(e) => setQuantity(e.target.value)}
  data-testid="quantity-input"
  placeholder="Quantity"
/>

                <p className="error-text form-hint" data-testid="quantity-input-error">
                    {empty.quantity ? 'Quantity is required' : ''}
                </p>
              </label>
              <button className="mt-50" type="submit" data-testid="submit-button">
                Submit
              </button>
            </form>
          </section>
        </div>
      );
    }
    
    export default FormValidation;