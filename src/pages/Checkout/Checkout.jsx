import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="checkout-bg">
      <div className="container">
        <div className="go-back" onClick={() => navigate(-1)}>Go Back</div>
        
        <div className="checkout-layout">
          <div className="checkout-form-container">
            <div className="checkout-title">Checkout</div>
            
            <div className="section-title">Billing Details</div>
            <div className="input-grid">
              <div className="input-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="input-group">
                <label>Phone Number</label>
                <input type="text" placeholder="Your Phone" />
              </div>
            </div>

            <div className="section-title">Shipping Info</div>
            <div className="input-grid">
              <div className="input-group full">
                <label>Address</label>
                <input type="text" placeholder="Your Addres" />
              </div>
              <div className="input-group">
                <label>ZIP Code</label>
                <input type="text" placeholder="Your ZIP Code" />
              </div>
              <div className="input-group">
                <label>City</label>
                <input type="text" placeholder="Your City" />
              </div>
              <div className="input-group">
                <label>Country</label>
                <input type="text" placeholder="Your Country" />
              </div>
            </div>

            <div className="section-title">Payment Details</div>
            <div className="input-grid">
               <div className="input-group"><label>Payment Method</label></div>
               <div className="payment-options">
                  <div className="payment-method active">
                    <div className="radio-dot active"></div>
                    e-Money
                  </div>
                  <div className="payment-method">
                    <div className="radio-dot"></div>
                    Cash on Delivery
                  </div>
               </div>
            </div>
          </div>

          <div className="checkout-summary-container">
            <h6 style={{textTransform: 'uppercase', marginBottom: '32px'}}>Summary</h6>
            
            <div className="cart-item">
              <div className="cart-item-img">{/* Placeholder */}</div>
              <div className="cart-item-info">
                <div className="cart-item-name">XX99 MK II</div>
                <div className="cart-item-price">$ 2,999</div>
              </div>
              <div style={{color: 'grey', fontWeight: 'bold'}}>x1</div>
            </div>

            <div style={{marginTop: '32px'}}>
              <div className="summary-row">
                <span style={{color: 'grey'}}>Total</span>
                <span style={{fontWeight: 'bold'}}>$5,396</span>
              </div>
              <div className="summary-row">
                <span style={{color: 'grey'}}>Shipping</span>
                <span style={{fontWeight: 'bold'}}>$50</span>
              </div>
              <div className="summary-row">
                <span style={{color: 'grey'}}>VAT</span>
                <span style={{fontWeight: 'bold'}}>$1,079</span>
              </div>
              <div className="summary-row summary-total">
                <span style={{color: 'grey'}}>Grand Total</span>
                <span style={{fontWeight: 'bold', color: 'var(--orange)'}}>$ 5,446</span>
              </div>
            </div>

            <button className="btn-orange" style={{width: '100%', marginTop: '32px'}}>
              Continue & Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};