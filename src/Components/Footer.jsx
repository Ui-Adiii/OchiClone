import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold">ochi</h2>
            <p className="text-gray-400 mt-2">
              Elevate your experience with our premium services.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to={""} className="hover:text-gray-300">Home</Link></li>
              <li><Link to={"/aboutus"} className="hover:text-gray-300">About</Link></li>
              <li><Link to={"/services"} className="hover:text-gray-300">Services</Link></li>
              <li><Link to={"/contact"} className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <Link to={"/"} className="text-gray-400 hover:text-white text-xl"><FaFacebook /></Link>
              <Link to={"/"} className="text-gray-400 hover:text-white text-xl"><FaTwitter /></Link>
              <Link to={"/"} className="text-gray-400 hover:text-white text-xl"><FaInstagram /></Link>
              <Link to={"/"} className="text-gray-400 hover:text-white text-xl"><FaLinkedin /></Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} BrandName. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
