import './index.css'

const Products=(props)=>{
   const {products,addToCart}=props
    return (
        <div>
            <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product">
                <img src={product.imgurl} className='image'/>
                <h2>{product.name}</h2>
                <p>₹ {product.price}</p>
                <button onClick={() => addToCart(product)} className="button">Add to cart</button>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Products