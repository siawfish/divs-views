"use client";

import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form state when closing modal
    setFormData({ name: '', email: '', company: '', message: '' });
    setSubmitStatus('idle');
    setSubmitMessage('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        // Reset form data
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center px-4 py-8">
      <div className="backdrop-blur-sm max-w-5xl w-full p-12 relative">
        {/* Main Heading */}
        <div className="mb-4">
          <h1 className="text-7xl font-black text-gray-900 mb-4 tracking-tight">
            DIVS & VIEWS
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-600 rounded-full"></div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-900 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Web Development</h3>
              <p className="text-gray-600 leading-relaxed">Custom websites and web applications built with modern technologies.</p>
            </div>
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-900 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Apps</h3>
              <p className="text-gray-600 leading-relaxed">Native and cross-platform mobile applications for iOS and Android.</p>
            </div>
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-900 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">UI/UX Design</h3>
              <p className="text-gray-600 leading-relaxed">Beautiful, intuitive user interfaces and exceptional user experiences.</p>
            </div>
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-900 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-xl">☁️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Solutions</h3>
              <p className="text-gray-600 leading-relaxed">Scalable cloud infrastructure and deployment services.</p>
            </div>
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-900 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consulting</h3>
              <p className="text-gray-600 leading-relaxed">Expert technical guidance and project management support.</p>
            </div>
            <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-900 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Maintenance</h3>
              <p className="text-gray-600 leading-relaxed">Ongoing support, updates, and optimization for your digital products.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button
            onClick={openModal}
            className="group bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-black transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl"
          >
            <span className="text-lg group-hover:rotate-12 transition-transform duration-300">→</span>
            Get Started
          </button>
        </div>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-white max-w-lg w-full rounded-2xl shadow-2xl transform animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-gray-900 to-black text-white p-6 rounded-t-2xl">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <p className="text-gray-300 mt-1">We'd love to hear from you</p>
              
              {/* Enhanced Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white hover:text-gray-200 transition-all duration-200 group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Contact Form */}
            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 placeholder:text-gray-400 text-gray-900 bg-white"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 placeholder:text-gray-400 text-gray-900 bg-white"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 placeholder:text-gray-400 text-gray-900 bg-white"
                    placeholder="Enter your company name (optional)"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 placeholder:text-gray-400 text-gray-900 bg-white resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-3 px-6 rounded-xl font-medium hover:from-gray-800 hover:to-black transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              
              {/* Contact Info */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  Or reach us directly at{" "}
                  <a href="mailto:support@divsandviews.com" className="text-black font-medium hover:underline">
                    hello@divsandviews.com
                  </a>
                </p>
              </div>

              {/* Submission Status */}
              {submitStatus === 'success' && (
                <div className="text-center text-green-600 mt-4">
                  {submitMessage}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-center text-red-600 mt-4">
                  {submitMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
