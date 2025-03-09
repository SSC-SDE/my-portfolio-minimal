"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
            Get in <span className="text-purple-500">touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl space-y-8"
          >
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>
              <a
                href="tel: +91 8658359154"
                className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
              >
                +91 8658359154
                <span className="text-gray-500">
                  <i className="fas fa-arrow-up-right"></i>
                </span>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Email</p>
              <a
                href="mailto:shankhyasubhrac@outlook.com"
                className="text-xl lg:text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
              >
                shankhyasubhrac@outlook.com
                <span className="text-gray-500">
                  <ArrowUpRight className="text-gray-500" size={24} />
                </span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg">Address</p>
              <address className="text-xl not-italic leading-relaxed">
                Mumbai, MH(Maharashtra), INDIA <br />
              </address>
            </div>
          </motion.div>
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
