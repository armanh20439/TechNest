const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600">
          We'd love to hear from you! Whether you have a question about products, pricing, or anything else—our team is ready to help.
        </p>
      </div>

      {/* Info Section */}
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <ul className="text-gray-700 space-y-2">
            <li><strong>Email:</strong> support@yourstore.com</li>
            <li><strong>Phone:</strong> +1 (555) 123-4567</li>
            <li><strong>Address:</strong> 123 E-commerce Street, City, Country</li>
            <li><strong>Hours:</strong> Mon-Fri, 9am – 6pm</li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border px-4 py-2 rounded-md"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
