"use client";
import Image from "next/image";
import { Virtuoso } from "react-virtuoso";

const DashboardCertificates = ({ images }) => {
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

        marginLeft: "3rem",
      }}
      totalCount={images.length}
      itemContent={(index) => {
        const image = images[index];
        // console.log("image", image);
        return (
          <div
            key={index}
            className="flex h-auto w-200px flex-row justify-center"
          >
            <a key={image.id} href={image.url} target="_blank" rel="noreferrer">
              <div className="text-slate-200 text-center border-t-2 border-t-cyan-700 pt-2">
                {image.name}
              </div>
              <Image
                src={image.url}
                style={{ objectFit: "contain" }}
                width={400}
                height={292}
                alt={image.name}
              />
            </a>
          </div>
        );
      }}
    />
  );
};
export default DashboardCertificates;
