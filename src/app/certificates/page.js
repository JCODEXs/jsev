import DashboardCertificates from "../components/view-all-certificates";

export default function page() {
  const images = [
    {
      id: 26,
      url: "https://mqd2t7385i.ufs.sh/f/2k3INuxlIONrdADEE28LXtOekVphNS0KFjfDm7Po9R3w5n4q",
      name: "Magister en ingenieria ",
      urlweb: "",
    },
    {
      id: 26,
      url: "https://mqd2t7385i.ufs.sh/f/2k3INuxlIONrEMtxKUGkP7ALUKT5H4WyvVOC0i2Bob8zdeqN",
      name: "Ingeniero Mecanico",
      urlweb: "",
    },

    {
      id: 26,
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-c753bf4a-a968-4644-a753-95b49a6abdaf.jpg",
      name: "Software arquitecture",
      urlweb: "",
    },
    {
      id: 21,
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-ac72025a-827c-477a-8a0b-c8af2ddf43a3.jpg",
      name: "Next js",
      urlweb: "",
    },
    {
      id: 22,
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-61766fee-4600-4777-b245-163fc3483397.jpg",
      name: "React",
      urlweb: "",
    },

    {
      id: 23,
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-6683149f-5abc-4d0f-8734-ada0140ce7ad.jpg",
      name: "Javascript",
      urlweb: "",
    },
    {
      id: 24,
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-43947187-4c92-4253-8b48-a340c9b96381.jpg",
      name: "Patrones de diseño",
      urlweb: "",
    },
    {
      id: 25,
      url: "https://utfs.io/f/8647963d-e2e9-4264-94b5-13a27f436b48-t55sk1.png",
      name: "Blockchain",
      urlweb: "",
    },
    {
      id: 26,
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-d75f797e-54c5-4797-ab8f-cd9da31e6faa.jpg",
      name: "Mongo Db",
      urlweb: "",
    },
    {
      id: 26,
      url: "https://mqd2t7385i.ufs.sh/f/2k3INuxlIONrYAdCTJpgpXmvS42f1UENTl8i0zeIaJQ3qMn6",
      name: "AMDM",
      urlweb: "",
    },
  ];

  return (
    <div>
      <DashboardCertificates images={images} />{" "}
    </div>
  );
}
