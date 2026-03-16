import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm">
            D
          </div>
          <span className="text-white font-bold text-sm tracking-wide">
            DENNIZ
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
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
            </li>
          ))}
          <li>
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
          </li>
        </ul>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden lg:inline-block bg-primary text-black text-sm font-semibold px-5 py-2 rounded-md hover:bg-primary/80 transition-colors duration-200"
        >
          Get In Touch
        </Link>

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
      {menuOpen && (
        <div className="lg:hidden bg-black/95 border-t border-white/10 px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.label}>
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
              </li>
            ))}
            <li>
              <Link
                to="/get-funded"
                className="text-primary text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Get Funded
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="inline-block bg-primary text-black text-sm font-semibold px-5 py-2 rounded-md mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
