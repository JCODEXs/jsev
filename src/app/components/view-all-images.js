"use client";
import Image from "next/image";
import { Virtuoso } from "react-virtuoso";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

const Dashboard = ({ images }) => {
  // Track loaded state for each item
  const [loaded, setLoaded] = useState({});

  // Use callback to handle item load more efficiently
  const handleItemLoaded = useCallback(
    (index) => {
      setLoaded((prev) => {
        if (prev[index]) return prev; // Avoid unnecessary re-render if already loaded
        return { ...prev, [index]: true }; // Set the specific index as loaded
      });
    },
    [setLoaded]
  );

  // Load all images (execute useEffect outside of item rendering function)
  useEffect(() => {
    images.forEach((_, index) => {
      if (!loaded[index]) {
        handleItemLoaded(index);
      }
    });
  }, [images, loaded, handleItemLoaded]);

  return (
    <Virtuoso
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginLeft: "5rem",
      }}
      totalCount={images.length}
      itemContent={(index) => {
        const image = images[index];
        const isLoaded = loaded[index] || false; // Check if the item has loaded

        return (
          <div
            key={index}
            className={`flex h-auto w-200px flex-row justify-center transition-opacity duration-700 delay-${
              index * 300
            } ${isLoaded ? "opacity-100 top-0" : "opacity-0 top-6"}`}
          >
            <Link
              key={image.id}
              href={{ pathname: `/img/${image.id}`, query: { modal: "true" } }}
              passHref
              shallow
            >
              <div className="text-slate-300 pt-3 border-t-4 border-t-cyan-600 justify-center text-center">
                {image.name}
              </div>
              <Image
                src={image.url}
                style={{ objectFit: "contain" }}
                width={400}
                height={292}
                alt={image.name}
              />
            </Link>
          </div>
        );
      }}
    />
  );
};

export default Dashboard;
