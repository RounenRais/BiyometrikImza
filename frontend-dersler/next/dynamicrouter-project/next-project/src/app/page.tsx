
"use client";
import Link from "next/link";
export default function Home() {
  return (
   <>
   <Link href={`/products/${1}`}>Product</Link>
   </>
  );
}
