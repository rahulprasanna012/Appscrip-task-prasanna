"use client";

import "@/app/styles/panels.css";

export default function WishlistPanel({
  items,
  isOpen,
  onClose,
  onRemove,
  onAddToCart,
}) {
  return (
    <>
      {isOpen && <div className="panel-overlay" onClick={onClose}></div>}
      <div className={`panel ${isOpen ? "active" : ""}`} id="wishlistPanel">
        <div className="panel-header">
          <h2 className="panel-title">WISHLIST</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="panel-content">
          {Object.keys(items).length === 0 ? (
            <div className="empty-message">Your wishlist is empty</div>
          ) : (
            Object.values(items).map((item) => (
              <div className="panel-item" key={item.id}>
                <div className="panel-item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="panel-item-info">
                  <p className="panel-item-title">{item.title}</p>
                  <p className="panel-item-price">${item.price.toFixed(2)}</p>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => {
                      onAddToCart(item.id);
                      onRemove(item.id);
                    }}
                  >
                    ADD TO CART
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
