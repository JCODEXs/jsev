import ExperienceItem from "./ExperienceItem";

const experienceData = [
  {
    period: "2023 — Present",
    title: "Director",
    company: "ColorMetta",
    companyUrl: "/archive",
    role: "FullStack Engineer",
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including law firms, wood furniture store, bakery, and events.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "NextJs",
      "MongoDb",
      "Drizle",
    ],
    links: [
      { name: "Solar Calculator", url: "https://pvcalculator.jsescobar.pro/" },
      {
        name: "Soccer traker",
        url: "https://soccer.jsescobar.pro/",
      },
      { name: "Delicipes", url: "http://veganplan.jsescobar.pro/" },
    ],
  },
  {
    period: "June 2022 — October 2023",
    title: "FullStack developer",
    company: "Imperial Studio",
    companyUrl: "https://www.instagram.com/imperialstudio_md/",
    role: "FrontEnd Engineer",
    description:
      "Design, develop, and maintainment a comprehensive dashboard integrating large data APIs and real-time data management systems. This dashboard is utilized for the administration of rooms and the monitoring of employee performance indicators. I have leveraged MongoDB, AWS S3 services, and internal communication tools to ensure a seamless and efficient user experience.",
    technologies: ["NextJs", "CSS", "MongoDB", "Docker"],
  },
  {
    period: "November 2021-January 2022",
    title:
      "Professional services for the support of technical activities of research",
    company: "Universidad del valle",
    companyUrl: "https://www.univalle.edu.co/",
    role: "Research Engineer",
    description:
      "Preparation of a proposal based on maritime electomobility to apply to investment funds such as MGA y PFAN",
  },
  {
    period: "March 2021 - July de 2021",
    title: "3D-Designer",
    company: "Parquesoft",
    companyUrl: "https://parquesoft.com/",
    role: "CAD Engineer",
    description:
      "Create detailed 2D drawings for each part, including dimensions, tolerances, and material specifications,Create exploded views and assembly instructions,For sheet metal components, create flat patterns and specify bending operations.",
    technologies: ["Solid Works", "Ansys"],
  },
  {
    period: "January 2019- July 2019",
    title: "Projects Manager",
    company: "UET Ingenieria",
    companyUrl: "https://uetingenieria.com/",
    role: "Projects Engineer",
    description:
      "Led a team of 10 in the successful completion of a several projects, delivering on time and within budget. Developed project plans, timelines, and budgets, ensuring alignment with business objectives. Coordinated with stakeholders. Utilized project management software to monitor progress and manage resources efficiently.",
  },
  {
    period: "August 2011-February 2015",
    title: "Sales Engineer",
    company: "Reyser ltda",
    companyUrl: "https://jsescobar.pro",
    role: "Power trasmission expert",
    description:
      "Design and assembly of electromechanical systems. selection and adaptation of power transmission systems,Conducted product demonstrations and presentations to potential clients. Managed a portfolio of 15+ clients, providing exceptional customer service and support.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experienceData.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </ol>
        <div>
          <div className="mt-12 mb-4">
            <a
              className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
              aria-label="View Full Résumé"
              href="https://tqheuy3b23.ufs.sh/f/3nPJ2rcd2SU4p0UioTRTgARzysuKLx92whPrvOG1Ybn5BMkZ"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  View Full{" "}
                </span>
                <span className="whitespace-nowrap">
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    Résumé
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </div>
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
            aria-label="View Full Project Archive"
            href="/certificates"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Certificates{""}
              </span>
              <span className="whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M11.8,2c-0.2,0-0.4,0.1-0.5,0.2L9.9,3.5L8.3,3.2C7.8,3.1,7.5,3.4,7.4,3.8L7.1,5.6L5.4,6.4C5,6.6,4.9,7,5.1,7.4L5.9,9  l-0.8,1.6c-0.2,0.4,0,0.8,0.3,1l1.7,0.8l0.3,1.8c0.1,0.4,0.5,0.7,0.9,0.6l1.9-0.3l1.4,1.3c0.3,0.3,0.8,0.3,1.1,0l1.4-1.3l1.9,0.3  c0.4,0.1,0.8-0.2,0.9-0.6l0.3-1.8l1.7-0.8c0.4-0.2,0.5-0.6,0.3-1L18.1,9l0.8-1.6c0.2-0.4,0.1-0.8-0.3-1l-1.7-0.8l-0.3-1.8  c-0.1-0.4-0.5-0.7-0.9-0.6l-1.9,0.3l-1.4-1.3C12.3,2,12,2,11.8,2z M6.1,13.1L3,19.3l3.6-0.5L8.4,22l2.6-5.3l-0.2-0.2l-1-0.9  l-1.4,0.2c-0.9,0.1-1.8-0.5-2-1.4L6.1,13.1L6.1,13.1z M17.9,13.1l-0.3,1.3c-0.2,0.8-0.9,1.4-1.7,1.4h-0.2l-1.4-0.2l-1,0.9l-0.2,0.2  l2.6,5.3l1.8-3.1l3.6,0.5L17.9,13.1z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
