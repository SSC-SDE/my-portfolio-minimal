"use client";

import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="overflow-x-clip py-32 text-white max-w-[1200px] mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16"
      >
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl font-bold text-gray-300"
          >
            Contact <span className="text-purple-500">Form</span>
          </motion.h2>
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl space-y-8"
            action="https://formspree.io/f/mvgqgjvb" // Replace with your Formspree endpoint
            method="POST"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-lg text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full p-2 rounded bg-gray-800 text-white"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-lg text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full p-2 rounded bg-gray-800 text-white"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-lg text-gray-300">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="w-full p-2 rounded bg-gray-800 text-white"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-lg text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                className="w-full p-2 rounded bg-gray-800 text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-600 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.123456789012!2d72.8776559!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};
