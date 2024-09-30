import Link from "next/link";
import Head from "next/head";

// إضافة صورة للمنتج
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$100",
    description: "This is a description for product 1.",
    image: "https://via.placeholder.com/300", // استبدل برابط الصورة الفعلي
  },
  {
    id: 2,
    name: "Product 2",
    price: "$150",
    description: "This is a description for product 2.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$200",
    description: "This is a description for product 3.",
    image: "https://via.placeholder.com/300",
  },
];

export default function Products() {
  return (
    <>
      <Head>
        <title>Products - Simple E-Commerce</title>
        <meta name="description" content="Browse our product list" />
      </Head>
      <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10">
        <h1 className="text-5xl font-bold mb-8 text-blue-600">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold text-blue-600 mb-4">
                  {product.price}
                </p>
                <Link
                  href={`/products/${product.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
