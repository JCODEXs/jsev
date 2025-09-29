import ProjectItem from "./ProjectItem";

const projectsData = [
  {
    title: "Metta Photovoltaics",
    description:
      "Understand and optimize your energy consumption with our comprehensive suite of tools. Track energy usage of individual appliances. Visualize consumption patterns with interactive charts. Calculate potential savings with energy-efficient alternatives. Plan solar installations based on your actual energy needs",
    technologies: ["Once-ui", "NextJs", "Tailwind", "Zod"],
    url: "https://pvcalculator.jsescobar.pro/",
    image: "/solarcalculator.png",
    imageAlt: "",
    imageStyle: {
      color: "transparent",
      height: "184px",
      width: "190px",
    },
  },
  {
    title: "Delicipes Plan. Shop. Eat.",
    description:
      "meal planning with detailed recipes, cost calculations, and easy-to-use planners. Generate grocery lists based on your weekly meal plan and stay within budget effortlessly",
    technologies: [
      "S3",
      "NextJs",
      "MongoDB",
      "Tailwind",
      "Shadcn",
      "Clerk",
      "Docker",
      "Zustand",
    ],
    url: "https://veganplan.jsescobar.pro/",
    image: "https://utfs.io/f/3nPJ2rcd2SU4S7mGzNhWCYQwmdOVEp4gAlaG6BfKxLjTuHqe",
    imageAlt: "Delicipes",
    imageStyle: { color: "transparent" },
  },
  {
    title: "Soccer Ligue , Plan and register",
    description:
      "The data from you local soccer ligue presented in an clean structured way plan matches, manage teams players and referees ass well as you sport scenarios. register the results to acces team and player statistics.",
    technologies: [
      "S3",
      "NextJs",
      "Supabase",
      "Tailwind",
      "Shadcn",
      "Docker",
      "Zustand",
    ],
    url: "https://soccer.jsescobar.pro/",
    image:
      "https://tqheuy3b23.ufs.sh/f/3nPJ2rcd2SU4JkdU33y7MuK10SFx69DosXtPACk5plhTc4Hv",
    imageAlt: "socoer",
    imageStyle: { color: "transparent", height: "170px" },
  },
];

export default function ProjectsSection({ handleImageLoad }) {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projectsData.map((project, index) => (
            <ProjectItem
              key={index}
              project={project}
              handleImageLoad={handleImageLoad}
            />
          ))}
        </ul>

        <div className="mt-12 ">
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
            aria-label="View Full Project Archive"
            href="/archive"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full Project{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  Archive
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
      </div>
    </section>
  );
}
