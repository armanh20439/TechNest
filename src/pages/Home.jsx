import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
    const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://www.bdshop.com/pub/media/catalog/product/cache/eaf695a7c2edd83636a0242f7ce59484/p/o/portable_card_type_campaign_butane_gas_stove_burner_with_bottle_2_.jpg",
  },
  {
    id: 2,
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Home & Garden",
    image: "https://www.bdshop.com/pub/media/catalog/product/cache/eaf695a7c2edd83636a0242f7ce59484/p/o/portable_card_type_campaign_butane_gas_stove_burner_with_bottle_2_.jpg",
  },
  {
    id: 4,
    name: "Sports",
    image: "https://www.bdshop.com/pub/media/catalog/product/cache/eaf695a7c2edd83636a0242f7ce59484/p/o/portable_card_type_campaign_butane_gas_stove_burner_with_bottle_2_.jpg",
  },
];
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
      
        setFeaturedProducts(data.slice(0, 4));
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
     
      <div className="bg-blue-600 text-white rounded-xl p-10 text-center mb-10 shadow-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to TechNest!</h1>
        <p className="text-lg mb-6">Discover the latest and greatest in tech gadgets and accessories.</p>
        <a
          href="/products"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Browse Products
        </a>
      </div>
      <section className="my-8">
        <h2 className="text-2xl  font-semibold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="cursor-pointer group rounded overflow-hidden shadow hover:shadow-lg transition">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-32 object-cover group-hover:scale-105 transform transition duration-300"
              />
              <div className="text-center mt-2 font-semibold">{category.name}</div>
            </div>
          ))}
        </div>
      </section>

      
      <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">Featured Products</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
