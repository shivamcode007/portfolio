import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gray-950 py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-3">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Feel free to contact me for projects, collaborations, freelance
            work, or job opportunities.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center">
            <FaEnvelope className="text-3xl text-cyan-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-gray-400 break-all">
              shivamthakur8540@gmail.com
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center">
            <FaPhoneAlt className="text-3xl text-cyan-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Phone</h3>
            <p className="text-gray-400">+91 8540839430</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center">
            <FaMapMarkerAlt className="text-3xl text-cyan-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-gray-400">Siwan,Bihar</p>
          </div>
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400"
              />

              <textarea
                rows="5"
                placeholder="Write your message..."
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none resize-none focus:border-cyan-400"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>

              {success && (
                <p className="text-green-400 text-center">
                  Message submitted successfully ✅
                </p>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's Connect
            </h3>

            <p className="text-gray-400 mb-8">
              You can also connect with me through my social media profiles.
            </p>

            <div className="space-y-4">
              <a
                href="https://github.com/shivamcode007"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-transparent hover:border-cyan-400 transition"
              >
                <FaGithub className="text-2xl text-white" />
                <span className="text-white">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/yuvraj-kumar-326272320"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-transparent hover:border-cyan-400 transition"
              >
                <FaLinkedin className="text-2xl text-blue-400" />
                <span className="text-white">LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/yuvrazrazputt"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-transparent hover:border-cyan-400 transition"
              >
                <FaInstagram className="text-2xl text-pink-400" />
                <span className="text-white">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918540839430?text=Hi%20Yuvraj,%20I%20want%20to%20connect%20with%20you."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg hover:scale-110 transition-all duration-300"
      >
        <FaWhatsapp />
      </a>
    </section>
  );
};

export default Contact;