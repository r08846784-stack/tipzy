const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#020617] via-[#020b2d] to-[#020617] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* App Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              ☕ Tipzy
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              A place to connect, create & support
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Explore</a>
            <a href="#" className="hover:text-white transition">Support</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-2">
          <p>
            © {new Date().getFullYear()} <span className="text-white">Tipzy</span>. All rights reserved.
          </p>
          <p>
            Built with ❤️ by <span className="text-white font-medium">Tanmoy Roy</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
