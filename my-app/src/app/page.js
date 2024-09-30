import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple E-Commerce</title>
        <meta
          name="description"
          content="Welcome to our simple e-commerce website"
        />
      </Head>
      <div className="bg-gradient-to-b from-blue-900 to-blue-500 min-h-screen flex flex-col justify-center items-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            Welcome to{" "}
            <span className="text-yellow-300">Simple E-Commerce</span>
          </h1>
          <p className="text-lg font-light mb-10">
            Discover amazing products at the best prices.
          </p>
          <nav className="space-x-6">
            <Link
              href="/products"
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors shadow-lg"
            >
              View Products
            </Link>
            <Link
              href="/about"
              className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-medium hover:bg-yellow-400 hover:text-black transition-colors shadow-lg"
            >
              About Us
            </Link>
          </nav>
        </div>
        <footer className="mt-16 text-sm text-gray-300">
          &copy; {new Date().getFullYear()} "Zeyad Faiyoymi". All Rights
          Reserved.
        </footer>
      </div>
    </>
  );
}
