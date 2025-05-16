import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow p-4">
              <img src={item.image} alt={item.name} className="h-40 w-full object-cover rounded mb-3" />
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
