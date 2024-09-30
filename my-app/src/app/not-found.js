import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="bg-gradient-to-r from-red-400 to-red-600 min-h-screen flex flex-col items-center justify-center text-center">
        <div className="bg-white shadow-xl rounded-lg p-12 max-w-lg mx-auto relative overflow-hidden">
          <h1 className="text-8xl font-extrabold text-red-700">404</h1>
          <h2 className="text-4xl font-semibold mt-4 text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            We couldn't find the page you're looking for. It might have been
            removed, or the URL might be incorrect.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
          >
            Go Back to Home
          </Link>
          <img
            src="https://via.placeholder.com/150" // استبدل برابط الصورة المناسب
            alt="404 illustration"
            className="absolute bottom-0 right-0 opacity-10" // لإضافة تأثير جمالي
          />
        </div>
      </div>
    </>
  );
}
