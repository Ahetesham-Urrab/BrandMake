"use client";

import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Heart 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fff5f5] pt-16 pb-8 relative overflow-hidden text-slate-700">
      {/* Subtle Background Decoration */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-red-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo + About Section */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-6">
              {/* BRAND LOGO IMAGE */}
              <img 
                src="/footer-logo.svg" 
                alt="Brand Make Logo" 
                className="w-32 h-auto object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <p className="text-[14px] leading-relaxed text-slate-600 mb-6 max-w-xs mx-auto md:mx-0">
              Brand Make is a ROI-driven digital agency specializing in marketing and website development. 
              We help brands grow strategically, trackable and sustainable.
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-3">
              <a href="https://www.facebook.com/people/Brand-Make/100086084794760/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:-translate-y-1 transition-all shadow-md">
                <Facebook size={18} fill="currentColor" />
              </a>
              <a href="https://www.instagram.com/brandmakemedia/?igsh=MXg5MTQ0dmw4a210YQ%3D%3D#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 text-white hover:-translate-y-1 transition-all shadow-md">
                <Instagram size={18} />
              </a>
              <a href="https://in.linkedin.com/company/brand-make-digital-marketing-agency" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:-translate-y-1 transition-all shadow-md">
                <Linkedin size={18} fill="currentColor" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=918668303520&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:-translate-y-1 transition-all shadow-md">
                <MessageCircle size={18} fill="currentColor" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-[#EB433D] font-bold mb-6 text-lg tracking-tight">Quick Links</h4>
            <ul className="space-y-3 font-medium text-slate-600">
              <li><a href="/" className="hover:text-[#EB433D] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#EB433D] transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-[#EB433D] transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-[#EB433D] transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="text-center md:text-left">
            <h4 className="text-[#EB433D] font-bold mb-6 text-lg tracking-tight">Our Services</h4>
            <ul className="space-y-3 font-medium text-slate-600">
              <li><a href="#" className="hover:text-[#EB433D] transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-[#EB433D] transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-[#EB433D] transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-[#EB433D] transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="text-center md:text-left">
            <h4 className="text-[#EB433D] font-bold mb-6 text-lg tracking-tight">Contact Us</h4>
            <ul className="space-y-5 text-[14px]">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="text-[#EB433D] shrink-0 mt-0.5" size={18} />
                <span className="text-slate-600 leading-tight">
                  Office No. 207, 1st Floor,<br /> 
                  Konark Business Hub,<br />
                  Kondhwa, Pune - 411048
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="text-[#EB433D] shrink-0" size={18} />
                <a href="tel:+918668303520" className="text-slate-600 hover:text-[#EB433D] transition-colors font-medium">
                  +91 86683 03520
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="text-[#EB433D] shrink-0" size={18} />
                <a href="mailto:sales@brandmake.in" className="text-slate-600 hover:text-[#EB433D] transition-colors font-medium">
                  sales@brandmake.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© {currentYear} BrandMake. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-3 md:mt-0">
            Designed with <Heart size={14} className="text-[#EB433D] fill-[#EB433D]" /> by BrandMake
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;