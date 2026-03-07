import footerBg from "../assets/footer_background.jpeg";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={footerBg}
          alt="Concert"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        
        {/* Top CTA Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
            Get In Touch With Us
          </h2>

          <button className="bg-primary text-black font-semibold px-8 py-4 rounded-md hover:opacity-90 transition">
            Contact Us
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 my-12" />

        {/* Center Bottom Content */}
        <div className="flex flex-col items-center text-center gap-8">
          
          {/* Instagram Icon */}
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5C19.322 22 22 19.322 22 16.25v-8.5C22 4.678 19.322 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5c0 1.966-1.784 3.75-3.75 3.75h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm4.25 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap justify-center gap-10 text-sm">
            <a href="#" className="hover:text-primary transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition">
              Refund Policy
            </a>
            <a href="#" className="hover:text-primary transition">
              Terms & Conditions
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/70 mt-4">
            COPYRIGHT © 2026 MADMEN RECORDS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}