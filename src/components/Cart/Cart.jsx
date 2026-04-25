import { useNavigate } from 'react-router-dom';

export const Cart = ({ isOpen, onClose, cartItems, updateQuantity, removeAll }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h6>Cart ({cartItems.length})</h6>
          <div className="remove-all" onClick={removeAll}>Remove all</div>
        </div>

        <div className="cart-items-list">
          {cartItems.length === 0 && <div style={{textAlign: 'center', padding: '20px'}}>Your cart is empty</div>}
          
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img className="cart-item-img" src={item.image}/>
              <div className="cart-item-info">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">$ {item.price.toLocaleString()}</div>
              </div>
              <div className="quantity-control">
                <div className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>-</div>
                <div>{item.quantity}</div>
                <div className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</div>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length > 0 && (
          <>
            <div className="cart-total-row">
              <div className="total-label">Total</div>
              <div style={{fontWeight: 'bold', fontSize: '18px'}}>$ {totalPrice.toLocaleString()}</div>
            </div>

            <button className="btn-orange" style={{width: '100%'}} onClick={() => {
              onClose();
              navigate('/checkout');
            }}>
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};