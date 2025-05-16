const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Our Store</h1>
        <p className="text-gray-600 text-lg">
          Welcome to <span className="font-semibold text-blue-600">TechNest</span> — your go-to destination for the best quality products at unbeatable prices.
          We’re passionate about delivering excellence and providing a seamless online shopping experience.
        </p>
      </div>

      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-700">
          At YourStore, we envision a world where online shopping is simple, secure, and satisfying. 
          Our mission is to bring a curated selection of premium products to our customers while delivering exceptional customer service.
        </p>
      </div>

      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <ul className="grid md:grid-cols-3 gap-6 text-center">
          <li>
            <div className="font-bold text-lg">Jane Doe</div>
            <div className="text-sm text-gray-500">Founder & CEO</div>
          </li>
          <li>
            <div className="font-bold text-lg">John Smith</div>
            <div className="text-sm text-gray-500">Product Manager</div>
          </li>
          <li>
            <div className="font-bold text-lg">Emily Lee</div>
            <div className="text-sm text-gray-500">Customer Support Lead</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
