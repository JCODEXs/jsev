export default async function FullPageImageView({ id }) {
  const images = [
    {
      id: 31,
      url: "https://utfs.io/f/03762607-47de-4f5c-9a47-08dbe630ce41-a2g02k.png",
      name: "Imperial Studio",
    },
    {
      id: 32,
      url: "https://utfs.io/f/5f209717-885e-4f23-9710-2745e9fd8c87-yadea5.png",
      name: "Imperial Studio",
    },

    {
      id: 33,
      url: "https://utfs.io/f/4e217ec2-7382-4aec-b458-e9196b0ae36a-vn29ne.png",
      name: "Imperial Studio",
    },
    {
      id: 34,
      url: "https://utfs.io/f/d1cff984-7b81-4a5b-8e70-b730795a87c0-j4gxw2.png",
      name: "Quotter",
    },
    {
      id: 34,
      url: "https://utfs.io/f/af69f868-8e2b-41d1-b33b-f39aed3ff3aa-qwbr1o.png",
      name: "Delicipes",
    },
    {
      id: 1,
      url: "https://utfs.io/f/9a6e54e0-a555-47fc-b5e4-a8f1dd695612-k59w89.png",
      name: "introduccion fibra de carbono",
    },
    {
      id: 2,
      url: "https://utfs.io/f/2939a735-09fe-40ed-9fef-89d38d131910-k5nxxv.png",
      name: "introduccion fibra de carbono",
    },

    {
      id: 6,
      url: "https://utfs.io/f/c17b796c-72cb-43fc-8217-728aafecb9b1-k5oky5.png",
      name: "introduccion fibra de carbono",
    },
    {
      id: 7,
      url: "https://utfs.io/f/fafb078b-8740-401a-a503-df2e1a10f6a9-k5putt.png",
      name: "introduccion fibra de carbono",
    },
    {
      id: 4,
      url: "https://utfs.io/f/29da030c-49a9-439f-8971-541d1033db34-k5p7xr.png",
      name: "introduccion fibra de carbono",
    },
    {
      id: 11,
      url: "https://utfs.io/f/191b5f08-b0bd-4c7a-8c85-3de8394296e5-5jhh15.png",
      name: "Vortices acusticos",
    },
    {
      id: 12,
      url: "https://utfs.io/f/162e38e9-4d98-4f72-a14d-6a6bad25d89f-5jir0u.png",
      name: "Vortices acusticos",
    },
    {
      id: 13,
      url: "https://utfs.io/f/975b68b7-3da0-4b4d-ba67-b611f25f1e64-5jir12.png",
      name: "Vortices acusticos",
    },

    {
      id: 15,
      url: "https://utfs.io/f/bb870b32-dc11-476e-9d51-871f0d77210c-5jjdym.png",
      name: "Vortices acusticos",
    },
  ];
  const idAsNumber = Number(id);
  console.log(id, idAsNumber);
  const image = images.filter((image) => image.id === idAsNumber)[0];
  return (
    <div className="flex h-full w-full">
      <div className="flex w-96 flex-grow items-start justify-center object-contain">
        <img src={image.url} height={400} width={"auto"} alt="img" />
      </div>
      <div className="flex h-full  flex-shrink-0 flex-col border-l text-white">
        {/* <div className="border-b p-2 text-center text-xl">{image.name}</div> */}

        <div className="p-2"></div>
      </div>
    </div>
  );
}
