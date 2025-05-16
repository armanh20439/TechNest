import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";



const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart(); // 🔥

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product); // 🛒 Add to cart context
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) return <div className="text-center mt-10">Loading product details...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-700 text-lg mb-4">Price: ${product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mb-4"
            >
              Add to Cart
            </button>

            {added && (
              <div className="text-green-600 font-medium">
                ✅ Item added to cart!
              </div>
            )}
          </div>

          <a
            href="/products"
            className="mt-6 inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          >
            ← Back to Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
