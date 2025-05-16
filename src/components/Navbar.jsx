import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="font-bold text-blue-400">TechNest</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/products" className="hover:text-gray-300">Products</Link>
        <Link to="/cart" className="hover:text-blue-500">Cart</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        <Link to="/about" className="hover:text-gray-300">About Us</Link>
         
        
       
      </div>
    </nav>
  )
}
