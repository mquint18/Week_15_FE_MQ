import CheckButton from "./CheckButton"


function ProductCard({product}) {
    
    

    return (<div className="product-card">
                <div className= 'product-image'>
                    <img src={product.picture} alt={product.name} />
                    <div className ='product-overlay'>
                        <CheckButton></CheckButton>

                    </div>
                </div>
                <div className ='product-info'>
                    <h3>{product.name}</h3>
                    <h4> Amount: {product.quantity}  </h4>
                    
                </div>
            </div> )
}

export default ProductCard