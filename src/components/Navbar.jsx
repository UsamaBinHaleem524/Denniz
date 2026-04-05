import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import denizLogo from "../assets/deniz_logo.svg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Promotions", path: "/promotions" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <motion.img
            src={denizLogo}
            alt="Deniz Marketing"
            className="h-9 w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-gray-300 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Link
              to="/get-funded"
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === "/get-funded"
                  ? "text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              Get Funded
            </Link>
          </motion.li>
        </ul>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <Link
            to="/contact"
            className="hidden lg:inline-block bg-primary text-black text-sm font-semibold px-5 py-2 rounded-md hover:bg-primary/80 transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 border-t border-white/10 px-6 pb-4 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 pt-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`text-sm font-medium ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-gray-300 hover:text-primary"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  to="/get-funded"
                  className="text-primary text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Funded
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-primary text-black text-sm font-semibold px-5 py-2 rounded-md mt-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Get In Touch
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
