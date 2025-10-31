'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert('Thank you! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contacts = [
    {
      name: 'Utkarsh',
      phone: '+91-7895099154',
      role: 'Developer'
    },
    {
      name: 'Sankalp',
      phone: '+91-9058500798',
      role: 'Developer'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-20">
        {/* Header Section */}
        <div className="mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-mono tracking-[0.3em] text-gray-400 border-b border-gray-600 pb-2">
              GET IN TOUCH
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none mb-8">
            Let's Create
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white">
              Something Great
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
            We're here to bring your vision to life. Drop us a line and let's start building the future together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form Section - Takes 3 columns */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="space-y-8">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="block text-xs font-mono tracking-widest text-gray-500 mb-3 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b-2 border-gray-800 focus:border-white py-4 text-xl font-light text-white placeholder-gray-700 focus:outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${focusedField === 'name' ? 'w-full' : 'w-0'}`}></div>
                </div>

                <div className="relative">
                  <label className="block text-xs font-mono tracking-widest text-gray-500 mb-3 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b-2 border-gray-800 focus:border-white py-4 text-xl font-light text-white placeholder-gray-700 focus:outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
                </div>
              </div>

              {/* Phone */}
              <div className="relative">
                <label className="block text-xs font-mono tracking-widest text-gray-500 mb-3 uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-gray-800 focus:border-white py-4 text-xl font-light text-white placeholder-gray-700 focus:outline-none transition-all duration-300"
                  placeholder="+91-XXXXXXXXXX"
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${focusedField === 'phone' ? 'w-full' : 'w-0'}`}></div>
              </div>

              {/* Message */}
              <div className="relative">
                <label className="block text-xs font-mono tracking-widest text-gray-500 mb-3 uppercase">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={6}
                  className="w-full bg-transparent border-b-2 border-gray-800 focus:border-white py-4 text-xl font-light text-white placeholder-gray-700 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${focusedField === 'message' ? 'w-full' : 'w-0'}`}></div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="group relative bg-white text-black px-12 py-6 text-lg font-bold tracking-wider overflow-hidden hover:bg-black hover:text-white border-2 border-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </div>
          </div>

          {/* Contact Info - Takes 2 columns */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <h2 className="text-sm font-mono tracking-[0.3em] text-gray-500 uppercase mb-8">
                Direct Contact
              </h2>
              
              {contacts.map((contact, index) => (
                <div 
                  key={index}
                  className="group relative border-2 border-gray-900 hover:border-white p-8 transition-all duration-500 hover:bg-white hover:text-black overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 border-l-2 border-b-2 border-gray-800 group-hover:border-black transition-colors duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <Phone className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors" />
                      <span className="text-xs font-mono tracking-widest text-gray-500 group-hover:text-gray-700 uppercase">
                        {contact.role}
                      </span>
                    </div>
                    <h3 className="text-3xl font-black mb-3 group-hover:text-black transition-colors">
                      {contact.name}
                    </h3>
                    <a 
                      href={`tel:${contact.phone}`}
                      className="text-xl font-mono tracking-wider hover:tracking-widest transition-all duration-300"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="space-y-6 border-t-2 border-gray-900 pt-12">
              <div className="group cursor-pointer">
                <div className="flex items-center gap-4 mb-2">
                  <Mail className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  <span className="text-xs font-mono tracking-widest text-gray-600 uppercase">Email</span>
                </div>
                <p className="text-xl font-light text-gray-400 group-hover:text-white transition-colors ml-9">
                  contact@gijuhan.com
                </p>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-center gap-4 mb-2">
                  <MapPin className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  <span className="text-xs font-mono tracking-widest text-gray-600 uppercase">Location</span>
                </div>
                <p className="text-xl font-light text-gray-400 group-hover:text-white transition-colors ml-9">
                  Delhi, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;