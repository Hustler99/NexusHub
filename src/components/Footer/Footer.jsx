/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">
              <span className="nexus">Nexus</span><span className="hub">Hub</span>
            </div>
            <p>© 2023 NexusHub. All rights reserved.</p>
            <div className="payment-icons">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" />
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Partner</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Social</h4>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>FAQ</h4>
              <ul>
                <li><a href="#">Account</a></li>
                <li><a href="#">Deliveries</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Payments</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">E-books</a></li>
                <li><a href="#">Tutorials</a></li>
                <li><a href="#">Course</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
