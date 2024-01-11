import './index.css'

const MyCart=(props)=>{
  
    const {cart, removeFromCart}=props
   return (
    <div className="cart">
            <h2>Shopping Cart</h2>
            <ul className="my-cart-list">
            {cart.map((product) => (
                <div>
                <li key={product.id} className='cart-item'>
                <div className='my-cart-items'>
                <img src={product.imgurl} className='image1' />
                <div className='product-specifications'>
                <p className='product-description'>{product.name}</p> 
                <p>price-₹.{product.price}</p>
                <p>Quantity:{product.qty}</p>
                <button onClick={() => removeFromCart(product.id)} type='button' className='button'>Remove</button>
                </div>
                </div>
                </li>
                </div>
            )
            )}
            </ul>
            </div>
)
            }

export default MyCart