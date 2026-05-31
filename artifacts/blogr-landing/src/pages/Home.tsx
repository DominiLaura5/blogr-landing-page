import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const navItems = [
    { name: "Product", links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"] },
    { name: "Company", links: ["About", "Team", "Blog", "Careers"] },
    { name: "Connect", links: ["Contact", "Newsletter", "LinkedIn"] },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">

      {/* ── Navbar ───────────────────────────────────────── */}
      <header className="absolute top-0 w-full z-50 px-5 py-8 sm:px-8 md:px-16 md:py-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo + desktop nav */}
          <div className="flex items-center gap-10 lg:gap-14">
            <span className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tighter select-none">
              Blogr
            </span>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Primary navigation">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center gap-1 text-white/80 hover:text-white font-medium text-sm transition-colors"
                    aria-expanded={openDropdown === item.name}
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-3 w-44 bg-white rounded-xl shadow-2xl py-3 z-50"
                      >
                        {item.links.map((link) => (
                          <a
                            key={link}
                            href="#"
                            className="block px-5 py-2 text-sm text-gray-600 hover:text-gray-900 hover:font-semibold transition-all"
                          >
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

          {/* Desktop auth buttons */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button className="text-white/80 hover:text-white font-medium text-sm transition-colors">
              Login
            </button>
            <button className="bg-white text-[hsl(353,100%,62%)] px-7 py-2.5 rounded-full font-bold text-sm hover:bg-white/20 hover:text-white transition-all">
              Sign Up
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
            data-testid="button-hamburger"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* ── Mobile Menu ──────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 md:hidden"
              onClick={closeMobileMenu}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-24 left-4 right-4 sm:left-8 sm:right-8 bg-white rounded-2xl shadow-2xl p-6 z-40 md:hidden"
            >
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-0 py-4">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-center gap-2 w-full text-[hsl(208,49%,24%)] font-bold text-base"
                    aria-expanded={openDropdown === item.name}
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 text-[hsl(353,100%,62%)] transition-transform duration-200 ${openDropdown === item.name ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 bg-gray-50 rounded-xl py-3 flex flex-col items-center gap-3">
                          {item.links.map((link) => (
                            <a key={link} href="#" className="text-gray-500 text-sm font-medium hover:text-gray-800 transition-colors">
                              {link}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="flex flex-col items-center gap-3 pt-4">
                <button className="text-[hsl(208,49%,24%)] font-bold text-base w-full py-2 text-center">
                  Login
                </button>
                <button className="w-full bg-gradient-to-r from-[hsl(13,100%,72%)] to-[hsl(353,100%,62%)] text-white py-3 rounded-full font-bold shadow-md hover:opacity-90 transition-opacity">
                  Sign Up
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(13,100%,72%)] to-[hsl(353,100%,62%)] rounded-bl-[80px] sm:rounded-bl-[100px] text-center pt-44 pb-28 sm:pt-52 md:pt-64 md:pb-40 px-5 sm:px-8">
          {/* Background circles */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/3 opacity-20 pointer-events-none select-none">
            <svg width="700" height="700" viewBox="0 0 700 700" aria-hidden="true">
              <circle cx="350" cy="350" r="280" stroke="white" strokeWidth="70" fill="none" />
              <circle cx="350" cy="350" r="140" stroke="white" strokeWidth="35" fill="none" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-heading font-semibold tracking-tight leading-tight"
            >
              A modern publishing platform
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-white/80 text-base sm:text-lg md:text-xl max-w-xl"
            >
              Grow your audience and build your online brand whatever your skill level.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <button
                className="w-full sm:w-auto bg-white text-[hsl(353,100%,62%)] px-8 py-3 rounded-full font-bold text-sm hover:bg-white/20 hover:text-white transition-all"
                data-testid="button-start-free"
              >
                Start for Free
              </button>
              <button
                className="w-full sm:w-auto border-2 border-white text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-[hsl(353,100%,62%)] transition-all"
                data-testid="button-learn-more"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </section>

        {/* ── Designed for the future ─────────────────────── */}
        <section className="py-20 md:py-36 px-5 sm:px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-[hsl(208,49%,24%)] text-center mb-12 md:mb-20">
              Designed for the future
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-6">
              {/* Text */}
              <div className="w-full md:flex-1 flex flex-col gap-10 md:pr-8 order-2 md:order-1">
                {[
                  {
                    title: "Introducing an extensible editor",
                    body: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
                  },
                  {
                    title: "Robust content management",
                    body: "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.",
                  },
                  {
                    title: "Flexible design presets",
                    body: "We wanted to make it easy for you to create a stunning website. Pre-built themes bring your blog to life right out of the box. There are hundreds of fonts available, ensuring you find something perfect for your style.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="text-center md:text-left"
                  >
                    <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[hsl(208,49%,24%)] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[hsl(207,13%,34%)] leading-relaxed text-sm sm:text-base">
                      {item.body}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Illustration */}
              <div className="w-full md:flex-1 flex justify-center order-1 md:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-sm sm:max-w-md"
                >
                  <svg viewBox="0 0 480 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-xl" aria-hidden="true">
                    <rect x="40" y="40" width="400" height="320" rx="24" fill="white" stroke="#e2e8f0" strokeWidth="1.5"/>
                    <rect x="40" y="40" width="400" height="52" rx="24" fill="#f8fafc" />
                    <rect x="40" y="68" width="400" height="24" fill="#f8fafc" />
                    <circle cx="78" cy="66" r="10" fill="#f87171" />
                    <circle cx="104" cy="66" r="10" fill="#fbbf24" />
                    <circle cx="130" cy="66" r="10" fill="#34d399" />
                    <rect x="80" y="120" width="300" height="12" rx="6" fill="#cbd5e1" />
                    <rect x="80" y="148" width="260" height="12" rx="6" fill="#e2e8f0" />
                    <rect x="80" y="176" width="280" height="12" rx="6" fill="#e2e8f0" />
                    <rect x="80" y="204" width="220" height="12" rx="6" fill="#e2e8f0" />
                    <path d="M 100 290 Q 180 240 260 310 T 420 270" stroke="hsl(353,100%,62%)" strokeWidth="12" fill="none" strokeLinecap="round"/>
                    <path d="M 100 330 Q 200 280 300 330 T 460 300" stroke="#3b82f6" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.6"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Infrastructure ───────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-[hsl(237,17%,21%)] to-[hsl(237,23%,32%)] rounded-bl-[80px] sm:rounded-bl-[100px] rounded-tr-[80px] sm:rounded-tr-[100px] py-20 md:py-32 px-5 sm:px-8 md:px-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-24 -left-24 opacity-20 pointer-events-none select-none" aria-hidden="true">
            <svg width="500" height="500" viewBox="0 0 500 500">
              <circle cx="250" cy="250" r="220" stroke="#94a3b8" strokeWidth="50" fill="none" />
              <circle cx="250" cy="250" r="120" stroke="#94a3b8" strokeWidth="30" fill="none" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12 relative z-10">
            {/* Phone illustration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:flex-1 flex justify-center"
            >
              <svg viewBox="0 0 260 400" xmlns="http://www.w3.org/2000/svg" className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto drop-shadow-2xl" aria-hidden="true">
                <rect x="10" y="10" width="240" height="380" rx="36" fill="#1e293b"/>
                <rect x="18" y="18" width="224" height="364" rx="28" fill="#0f172a"/>
                <circle cx="130" cy="36" r="4" fill="#475569"/>
                <rect x="50" y="80" width="160" height="110" rx="16" fill="url(#pgrad)"/>
                <rect x="50" y="212" width="160" height="12" rx="6" fill="#1e3a5f"/>
                <rect x="50" y="234" width="120" height="12" rx="6" fill="#1e3a5f"/>
                <rect x="50" y="256" width="140" height="12" rx="6" fill="#1e3a5f"/>
                <rect x="50" y="300" width="70" height="36" rx="18" fill="url(#pgrad)" opacity="0.9"/>
                <defs>
                  <linearGradient id="pgrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(13,100%,72%)" />
                    <stop offset="100%" stopColor="hsl(353,100%,62%)" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:flex-1 text-center md:text-left"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-white mb-5 leading-tight">
                State of the Art Infrastructure
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Free, open, simple ───────────────────────────── */}
        <section className="py-20 md:py-36 px-5 sm:px-8 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-6">
            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:flex-1 flex justify-center order-1 md:order-1"
            >
              <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto" aria-hidden="true">
                <path d="M 20 180 Q 100 80 200 180 T 380 180" fill="none" stroke="hsl(353,100%,62%)" strokeWidth="28" strokeLinecap="round" opacity="0.85"/>
                <path d="M 20 240 Q 120 140 220 240 T 400 220" fill="none" stroke="#fbbf24" strokeWidth="18" strokeLinecap="round" opacity="0.7"/>
                <circle cx="200" cy="180" r="64" fill="white" stroke="#e2e8f0" strokeWidth="14"/>
                <circle cx="200" cy="180" r="32" fill="#3b82f6"/>
                <circle cx="200" cy="180" r="14" fill="white"/>
              </svg>
            </motion.div>

            {/* Text */}
            <div className="w-full md:flex-1 flex flex-col gap-10 md:pl-8 order-2 md:order-2">
              {[
                {
                  title: "Free, open, simple",
                  body: "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and relatively easy to learn.",
                },
                {
                  title: "Powerful tooling",
                  body: "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                  className="text-center md:text-left"
                >
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[hsl(208,49%,24%)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[hsl(207,13%,34%)] leading-relaxed text-sm sm:text-base">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="bg-[hsl(240,10%,16%)] text-[hsl(240,2%,79%)] py-16 sm:py-20 rounded-tr-[80px] sm:rounded-tr-[100px]" aria-label="Site footer">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start sm:col-span-2 md:col-span-1">
              <span className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tighter">Blogr</span>
            </div>

            {[
              { heading: "Product", links: navItems[0].links },
              { heading: "Company", links: navItems[1].links },
              { heading: "Connect", links: navItems[2].links },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <h4 className="text-white font-bold mb-5 text-sm tracking-wide uppercase">{heading}</h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm hover:text-white hover:underline transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center mt-14 text-xs opacity-40">
            Challenge by Frontend Mentor. Built with React + Vite.
          </p>
        </div>
      </footer>
    </div>
  );
}
