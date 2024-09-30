"use client"; // يجب إضافة هذا في بداية الملف

import { useParams } from "next/navigation";
import Head from "next/head";

// البيانات المخزنة محلياً
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$100",
    description: "Description of Product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$150",
    description: "Description of Product 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$200",
    description: "Description of Product 3",
  },
];

export default function ProductDetails() {
  const params = useParams(); // الحصول على معرف المنتج من الرابط
  const product = products.find((p) => p.id === parseInt(params.id)); // العثور على المنتج بناءً على ID

  if (!product) {
    return <div>Product not found</div>; // إذا لم يتم العثور على المنتج، عرض رسالة
  }

  return (
    <>
      <Head>
        <title>{product.name} - Simple E-Commerce</title>
        <meta name="description" content={`Details about ${product.name}`} />
      </Head>
      <div className="text-center">
        <h1 className="text-3xl font-bold mt-10">{product.name}</h1>
        <p className="mt-2">{product.description}</p>
        <p className="mt-2 font-bold">{product.price}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Add to Cart
        </button>
      </div>
    </>
  );
}
