"use client";
import Image from "next/image";
import { Virtuoso } from "react-virtuoso";
import Link from "next/link";

const Dashboard = ({ images }) => {
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
        console.log("image", image);
        return (
          <div
            key={index}
            className="flex h-auto w-200px flex-row justify-center"
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
