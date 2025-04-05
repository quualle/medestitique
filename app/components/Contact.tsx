"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would connect to a backend service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you shortly.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-primary/20">
      <div className="section-container !pt-0 !pb-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">Kontakt<span className="text-[#C0A080]">aufnahme</span></h2>
          <p className="paragraph max-w-3xl mx-auto">
            Bereit, Ihre Schönheitsreise zu beginnen? Kontaktieren Sie uns, um einen Beratungstermin zu vereinbaren oder mehr über unsere Behandlungen zu erfahren.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="heading-3 mb-6">Kontaktinformationen</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-[#333333]/50 p-3 rounded-full mr-4">
                  <FaPhone className="text-[#C0A080]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefon</h4>
                  <p>+49 30 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#333333]/50 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-[#C0A080]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p>contact@medestetique.com</p>
                </div>
              </div>
              
              
              <div className="flex items-start">
                <div className="bg-[#333333]/50 p-3 rounded-full mr-4">
                  <FaClock className="text-[#C0A080]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Öffnungszeiten</h4>
                  <p>Montag - Freitag: 9:00 - 19:00 Uhr</p>
                  <p>Samstag: 10:00 - 16:00 Uhr</p>
                  <p>Sonntag: Geschlossen</p>
                </div>
              </div>
            </div>
            
            {/* Kein Kartenplatzhalter mehr benötigt, da keine Adresse angezeigt wird */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="heading-3 mb-6">Senden Sie uns eine Nachricht</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Ihr Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">E-Mail Adresse*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">Telefonnummer</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block mb-2 font-medium">Behandlungsinteresse*</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
                      required
                    >
                      <option value="" disabled>Behandlung auswählen</option>
                      <option value="botox">Botox Behandlung</option>
                      <option value="fillers">Hyaluronsäure Filler</option>
                      <option value="prp">PRP Therapie</option>
                      <option value="consultation">Allgemeine Beratung</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Ihre Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
                  ></textarea>
                </div>
                
                <div className="text-right">
                  <button type="submit" className="button-primary">
                    Nachricht Senden
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;