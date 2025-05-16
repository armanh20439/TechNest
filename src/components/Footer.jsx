const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="text-lg font-semibold">TechNest</div>
        <nav className="flex space-x-6">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/products" className="hover:text-gray-300">Products</a>
          <a href="/about" className="hover:text-gray-300">About</a>
        </nav>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} TechNest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
