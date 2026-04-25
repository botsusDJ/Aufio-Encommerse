import { useNavigate } from 'react-router-dom';

export const CheckoutModal = ({ isOpen, cartItems, grandTotal }) => {
  const navigate = useNavigate();
  if (!isOpen || cartItems.length === 0) return null;

  const firstItem = cartItems[0];
  const otherItemsCount = cartItems.length - 1;

  return (
    <div className="confirm-overlay">
      <div className="confirm-modal">
        <div className="success-icon">✓</div>
        <div className="confirm-title">Thank you for your order</div>
        <div className="confirm-msg">You will receive an email confirmation shortly.</div>

        <div className="order-summary-box">
          <div className="summary-items-part">
            <div className="cart-item" style={{ marginBottom: '12px' }}>
              <img className="cart-item-img" src={firstItem.image}/>
              <div className="cart-item-info">
                <div className="cart-item-name">{firstItem.name}</div>
                <div className="cart-item-price">$ {firstItem.price.toLocaleString()}</div>
              </div>
              <div style={{ fontWeight: 'bold', color: 'grey' }}>x{firstItem.quantity}</div>
            </div>
            
            {otherItemsCount > 0 && (
              <div className="other-items-text">
                and {otherItemsCount} other item(s)
              </div>
            )}
          </div>

          <div className="summary-total-part">
            <div className="total-label-light">Grand Total</div>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>$ {grandTotal.toLocaleString()}</div>
          </div>
        </div>

        <button className="btn-orange" style={{ width: '100%' }} onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
};