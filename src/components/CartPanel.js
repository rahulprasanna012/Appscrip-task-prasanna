'use client';

import '@/app/styles/panels.css';
import Image from 'next/image.js';

export default function CartPanel({ 
  items, 
  isOpen, 
  onClose, 
  onUpdateQuantity, 
  onRemove 
}) {
  const total = Object.values(items).reduce(
    (sum, item) => sum + (item.price * item.quantity), 
    0
  );

  return (
    <>
      {isOpen && <div className="panel-overlay" onClick={onClose}></div>}
      <div className={`panel ${isOpen ? 'active' : ''}`} id="cartPanel">
        <div className="panel-header">
          <h2 className="panel-title">SHOPPING CART</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="panel-content">
          {Object.keys(items).length === 0 ? (
            <div className="empty-message">Your cart is empty</div>
          ) : (
            Object.values(items).map(item => (
              <div className="panel-item" key={item.id}>
                <div className="panel-item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="panel-item-info">
                  <p className="panel-item-title">{item.title}</p>
                  <p className="panel-item-price">${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button 
                      className="qty-btn" 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button 
                      className="qty-btn"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="panel-footer">
          <div className="total-row">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </>
  );
}
