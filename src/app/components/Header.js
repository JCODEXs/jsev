"use client";
import Image from "next/image";
import Navigation from "./Navigation";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Header({ allImagesLoaded, handleImageLoad }) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-3xl">
          <a href="/">Juan S. Escobar</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Process and Systems Engineer
        </h2>
        <div className="mt-4 mb-6 flex justify-center lg:justify-start">
          <Image
            src={"/JSEV.png"}
            height={200}
            width={200}
            alt="juancho"
            onLoad={handleImageLoad}
            className="rounded-lg w-full max-w-[140px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[230px] h-auto object-cover"
          />
        </div>
        <Navigation />
      </div>
      <SocialMediaLinks />
    </header>
  );
}
