import Image from "next/image";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Simple E-Commerce</title>
        <meta name="description" content="Learn more about Simple E-Commerce" />
      </Head>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4">
          We are a small online store offering a variety of products at
          competitive prices.
        </p>
        <div className="mt-8">
          <Image
            src="/about-us.jpg"
            alt="About Us"
            width={600}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
    </>
  );
}
