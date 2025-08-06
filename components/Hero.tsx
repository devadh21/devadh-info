import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Welcome to Devadh.info</h1>
      <div>
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          width={900}
          height={100}
        />
      </div>
      <div className="text-center mt-8">
        {/* <Link href={"https://devadh.com"} target="_blank"  className="bg-purple-900 text-white px-4 py-2 rounded  hover:bg-purple-700 transition-colors">
          Go to Devadh.com
        </Link> */}
        <a href="/docs/doc.pdf" download>Download pdf</a>
      </div>
    </div>
  );
}
