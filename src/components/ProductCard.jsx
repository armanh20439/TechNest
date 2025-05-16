import { Link } from "react-router-dom";

const ProductCard = ({ id, name, image, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between">
      <img src={image} alt={name} className="h-40 w-full object-cover rounded-md mb-4" />
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-1">{name}</h2>
        <p className="text-blue-600 font-bold mb-4">${price}</p>
      </div>
      <Link
        to={`/products/${id}`}
        className="mt-auto inline-block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Product Details
      </Link>
    </div>
  );
};

export default ProductCard;
