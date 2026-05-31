import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navItems = [
    {
      name: "Product",
      links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"]
    },
    {
      name: "Company",
      links: ["About", "Team", "Blog", "Careers"]
    },
    {
      name: "Connect",
      links: ["Contact", "Newsletter", "LinkedIn"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      {/* Navbar */}
      <header className="absolute top-0 w-full z-50 px-6 py-10 md:px-24 md:py-14">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-16">
            <h1 className="text-3xl font-heading font-bold text-white tracking-tighter">Blogr</h1>
            
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors"
                  >
                    {item.name} <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-4 w-40 bg-white rounded-xl shadow-xl py-4"
                      >
                        {item.links.map(link => (
                          <a key={link} href="#" className="block px-6 py-2 text-sm text-gray-700 hover:text-black hover:font-bold hover:bg-gray-50 transition-all">
                            {link}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-8 text-white">
            <button className="text-white/80 hover:text-white font-medium transition-colors">Login</button>
            <button className="bg-white text-[hsl(353,100%,62%)] px-10 py-3 rounded-full font-bold hover:bg-white/30 hover:text-white transition-all">
              Sign Up
            </button>
          </div>

          <button 
            className="md:hidden text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-28 left-6 right-6 bg-white rounded-xl shadow-2xl p-6 z-40 md:hidden flex flex-col gap-6 items-center text-center"
          >
            {navItems.map((item) => (
              <div key={item.name} className="w-full">
                <button 
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center justify-center gap-2 w-full text-[hsl(208,49%,24%)] font-bold text-lg mb-4"
                >
                  {item.name} <ChevronDown className={`w-5 h-5 text-[hsl(353,100%,62%)] transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openDropdown === item.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-gray-100 rounded-lg py-4 flex flex-col gap-4 overflow-hidden"
                    >
                      {item.links.map(link => (
                        <a key={link} href="#" className="text-gray-600 font-medium">{link}</a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div className="w-full h-[1px] bg-gray-200 my-2" />
            <button className="text-[hsl(208,49%,24%)] font-bold text-lg">Login</button>
            <button className="bg-gradient-to-r from-[hsl(13,100%,72%)] to-[hsl(353,100%,62%)] text-white px-10 py-3 rounded-full font-bold w-4/5 shadow-lg">
              Sign Up
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(13,100%,72%)] to-[hsl(353,100%,62%)] rounded-bl-[100px] text-center pt-48 pb-32 md:pt-64 md:pb-40 px-6">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-30 pointer-events-none">
             <svg width="1000" height="1000" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
              <circle cx="500" cy="500" r="400" stroke="white" strokeWidth="100" fill="none" />
              <circle cx="500" cy="500" r="200" stroke="white" strokeWidth="50" fill="none" />
            </svg>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl text-white font-heading font-semibold tracking-tight mb-6"
            >
              A modern publishing platform
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg md:text-xl mb-12"
            >
              Grow your audience and build your online brand whatever your skill level.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button className="bg-white text-[hsl(353,100%,62%)] px-10 py-3 rounded-full font-bold hover:bg-white/30 hover:text-white transition-all w-full sm:w-auto">
                Start for Free
              </button>
              <button className="border border-white text-white px-10 py-3 rounded-full font-bold hover:bg-white hover:text-[hsl(353,100%,62%)] transition-all w-full sm:w-auto">
                Learn More
              </button>
            </motion.div>
          </div>
        </section>

        {/* Designed for the future */}
        <section className="py-24 md:py-36 overflow-hidden max-w-7xl mx-auto px-6 relative">
          <h2 className="text-3xl md:text-4xl text-center mb-16 md:mb-24">Designed for the future</h2>
          
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
            <div className="flex-1 flex flex-col gap-12 md:pr-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <h3 className="text-2xl mb-4">Introducing an extensible editor</h3>
                <p className="text-[hsl(207,13%,34%)] leading-relaxed">
                  Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                  change the looks of a blog.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center md:text-left"
              >
                <h3 className="text-2xl mb-4">Robust content management</h3>
                <p className="text-[hsl(207,13%,34%)] leading-relaxed">
                  Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                  by adding customized categories, sections, format, or flow. With this functionality, you're in full control.
                </p>
              </motion.div>
            </div>
            
            <div className="flex-1 relative min-h-[400px] w-full">
              <div className="md:absolute top-1/2 md:-translate-y-1/2 md:translate-x-1/4 right-0 w-[150%] md:w-[150%] max-w-[800px] mx-auto">
                <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
                  <rect x="150" y="150" width="500" height="500" rx="40" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
                  <rect x="200" y="250" width="400" height="20" rx="10" fill="#cbd5e1" />
                  <rect x="200" y="300" width="350" height="20" rx="10" fill="#e2e8f0" />
                  <rect x="200" y="350" width="300" height="20" rx="10" fill="#e2e8f0" />
                  <circle cx="230" cy="200" r="15" fill="#f87171" />
                  <circle cx="270" cy="200" r="15" fill="#fbbf24" />
                  <circle cx="310" cy="200" r="15" fill="#34d399" />
                  <path d="M 400 450 Q 500 350 600 550" stroke="#f43f5e" strokeWidth="15" fill="none" strokeLinecap="round" />
                  <path d="M 300 500 Q 400 600 500 400" stroke="#3b82f6" strokeWidth="15" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="relative mt-24 md:mt-12 bg-gradient-to-br from-[hsl(237,17%,21%)] to-[hsl(237,23%,32%)] rounded-bl-[100px] rounded-tr-[100px] py-24 px-6 md:px-24">
          <div className="absolute top-0 left-0 -translate-y-1/2 md:-translate-y-1/4 -translate-x-1/4 opacity-40 pointer-events-none">
            <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300" cy="300" r="250" stroke="#475569" strokeWidth="50" fill="none" />
              <circle cx="300" cy="300" r="150" stroke="#475569" strokeWidth="30" fill="none" />
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="flex-1 w-full relative -mt-48 md:mt-0">
               <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[300px] mx-auto drop-shadow-2xl">
                 <rect x="50" y="50" width="300" height="500" rx="40" fill="#1e293b" />
                 <rect x="60" y="60" width="280" height="480" rx="30" fill="#0f172a" />
                 <circle cx="200" cy="80" r="5" fill="#64748b" />
                 <rect x="100" y="150" width="200" height="150" rx="20" fill="url(#grad1)" />
                 <rect x="100" y="330" width="200" height="20" rx="10" fill="#334155" />
                 <rect x="100" y="370" width="150" height="20" rx="10" fill="#334155" />
                 <defs>
                   <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" style={{ stopColor: "hsl(13,100%,72%)", stopOpacity: 1 }} />
                     <stop offset="100%" style={{ stopColor: "hsl(353,100%,62%)", stopOpacity: 1 }} />
                   </linearGradient>
                 </defs>
               </svg>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl text-white mb-6">State of the Art Infrastructure</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
              </p>
            </div>
          </div>
        </section>

        {/* Free, open, simple */}
        <section className="py-24 md:py-36 max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
            <div className="flex-1 relative min-h-[400px] w-full">
              <div className="md:absolute top-1/2 md:-translate-y-1/2 md:-translate-x-1/4 left-0 w-[150%] md:w-[150%] max-w-[800px] mx-auto">
                 <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <path d="M 200 400 Q 400 200 600 400 T 1000 400" fill="none" stroke="#f43f5e" strokeWidth="40" strokeLinecap="round" />
                  <path d="M 100 500 Q 300 300 500 500 T 900 500" fill="none" stroke="#fbbf24" strokeWidth="30" strokeLinecap="round" />
                  <circle cx="400" cy="400" r="80" fill="white" stroke="#e2e8f0" strokeWidth="20" />
                  <circle cx="400" cy="400" r="40" fill="#3b82f6" />
                 </svg>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-12 md:pl-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <h3 className="text-2xl mb-4">Free, open, simple</h3>
                <p className="text-[hsl(207,13%,34%)] leading-relaxed">
                  Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center md:text-left"
              >
                <h3 className="text-2xl mb-4">Powerful tooling</h3>
                <p className="text-[hsl(207,13%,34%)] leading-relaxed">
                  Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                  capable of producing even the most complicated sites.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[hsl(240,10%,16%)] text-[hsl(240,2%,79%)] py-20 rounded-tr-[100px]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <h2 className="text-3xl font-heading font-bold text-white tracking-tighter">Blogr</h2>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="flex flex-col gap-3">
              {navItems[0].links.map(link => (
                <li key={link}><a href="#" className="hover:underline hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              {navItems[1].links.map(link => (
                <li key={link}><a href="#" className="hover:underline hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <ul className="flex flex-col gap-3">
              {navItems[2].links.map(link => (
                <li key={link}><a href="#" className="hover:underline hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center mt-20 text-sm opacity-50">
          Challenge by Frontend Mentor. Coded by AI.
        </div>
      </footer>
    </div>
  );
}
