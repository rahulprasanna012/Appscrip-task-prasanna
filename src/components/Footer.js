'use client';

import '@/app/styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* NEWSLETTER SECTION */}
      <div className="footer-top">
        <div className="footer-section newsletter">
          <h3 className="footer-section-title">BE THE FIRST TO KNOW</h3>
          <p className="footer-description">Sign up for updates from mettā muse</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your e-mail" 
              className="newsletter-input"
            />
            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-section contact">
          <h3 className="footer-section-title">CONTACT US</h3>
          <p className="contact-item">+44 221 133 5360</p>
          <p className="contact-item">customercare@mettamuse.com</p>
          
          <h4 className="footer-subsection-title">CURRENCY</h4>
          <div className="currency-selector">
            <img src="https://flagcdn.com/us.svg" alt="USD" className="currency-flag" />
            <select className="currency-select">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
            </select>
          </div>
          <p className="currency-note">
            Transactions will be completed in Euros and a currency reference is available on request.
          </p>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* MAIN FOOTER SECTION */}
      <div className="footer-middle">
        <div className="footer-section footer-column">
          <h3 className="footer-brand">mettā muse</h3>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#stories">Stories</a></li>
            <li><a href="#artisans">Artisans</a></li>
            <li><a href="#boutiques">Boutiques</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#eu-docs">EU Compliances Docs</a></li>
          </ul>
        </div>

        <div className="footer-section footer-column">
          <h3 className="footer-column-title">QUICK LINKS</h3>
          <ul className="footer-links">
            <li><a href="#orders">Orders & Shipping</a></li>
            <li><a href="#seller">Join/Login as a Seller</a></li>
            <li><a href="#payment">Payment & Pricing</a></li>
            <li><a href="#returns">Return & Refunds</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section footer-column">
          <h3 className="footer-column-title">FOLLOW US</h3>
          <div className="social-links">
            <a href="#instagram" className="social-icon" title="Instagram">
              📷
            </a>
            <a href="#linkedin" className="social-icon" title="LinkedIn">
              💼
            </a>
          </div>

          <h3 className="footer-column-title payment-title">mettā muse ACCEPTS</h3>
          <div className="payment-methods">
            <img src="gpay.png" alt="GPay" className="payment-icon" />
            <img src="mastercard.png" alt="Mastercard" className="payment-icon" />
            <img src="paypal.png" alt="PayPal" className="payment-icon" />
            <img src="amex.png" alt="American Express" className="payment-icon" />
            <img src="apple.png" alt="Apple Pay" className="payment-icon" />
            <img src="opay.png" alt="OPay" className="payment-icon" />
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p className="copyright">Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}
