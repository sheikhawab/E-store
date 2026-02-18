import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterestP, FaEnvelope, FaSnapchatGhost, FaTumblr, FaYoutube, FaVimeoV } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t text-gray-800 text-sm py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        
        <div>
          <h2 className="text-xl font-bold text-pink-500">E-Store<span className="text-blue-500">.</span></h2>
        </div>

        <div>
          <h3 className="font-semibold mb-2">My Account</h3>
          <ul className="space-y-1">
            <li>My account</li>
            <li>Personal information</li>
            <li>Payment methods</li>
            <li>Orders history</li>
            <li>Payment options</li>
            <li>Discount</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Customer Services</h3>
          <ul className="space-y-1">
            <li>Help & contact</li>
            <li>Shipping & taxes</li>
            <li>Privacy Policy</li>
            <li>Return policy</li>
            <li>What's new</li>
            <li>Affiliates</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact Details</h3>
          <ul className="space-y-1">
            <li>📞 +966 546343458</li>
            <li>📧 sheikhawaab@gmail.com</li>
            <li>📧 venedor@mail.com</li>
            <li>💬 ven_shop_contact</li>
            <li>💬 venedor_support</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Information</h3>
          <ul className="space-y-1">
            <li>New products</li>
            <li>Top sellers</li>
            <li>Specials products</li>
            <li>Manufacturers</li>
            <li>Suppliers</li>
            <li>Today offers</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-center gap-4">
        <div className="flex gap-3 text-pink-400 text-xl">
          <FaFacebookF />
          <FaTwitter />
          <FaPinterestP />
          <FaEnvelope />
          <FaSnapchatGhost />
          <FaTumblr />
          <FaYoutube />
          <FaVimeoV />
        </div>
        <div className="text-xs text-gray-600">
          <p className="font-semibold">100% Secure & Trusted Payment</p>
          <p>Need help? Call us at +966546343458 for any assistance required.</p>
          <div className="mt-1 flex gap-2 justify-center text-2xl text-gray-700">
            <span>💳</span><span>💳</span><span>💳</span><span>💳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


  


