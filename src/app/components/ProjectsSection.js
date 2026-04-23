import ProjectItem from "./ProjectItem";

// const projectsData = [
//   {
//     title: "Cocina Pro",
//     description:
//       " Plataforma profesional para instaladores de cocinas. Cotizaciones precisas, visualización 3D y gestión de proyectos en un solo lugar.",
//     technologies: [
//       "chadCn",
//       "NextJs",
//       "Tailwind",
//       "Prisma",
//       "Supabase",
//       "SocketIO",
//       "Echarts",
//     ],
//     url: "https://mytemple-three.vercel.app",
//     image: "/CocinaPro.png",
//     imageAlt: "",
//     imageStyle: {
//       color: "transparent",
//       height: "184px",
//       width: "190px",
//     },
//   },
//   {
//     title: "QR Inventario",
//     description:
//       "Gestión de Inventario Limpio, eficiente,organizado y compartido.",
//     technologies: [
//       "chadCn",
//       "NextJs",
//       "Tailwind",
//       "Prisma",
//       "Supabase",
//       "SocketIO",
//       "Echarts",
//     ],
//     url: "https://inventory-rho-two.vercel.app",
//     image: "/inventarioQR.png",
//     imageAlt: "",
//     imageStyle: {
//       color: "transparent",
//       height: "184px",
//       width: "190px",
//     },
//   },
//   {
//     title: "My Temple",
//     description:
//       "MyTemple modela tu metabolismo en tiempo real. Cada comida, cada entrenamiento, cada peso registrado alimenta un motor que aprende y se adapta a ti.",
//     technologies: [
//       "chadCn",
//       "NextJs",
//       "Tailwind",
//       "Prisma",
//       "Supabase",
//       "SocketIO",
//       "Echarts",
//     ],
//     url: "https://mytemple-three.vercel.app",
//     image: "/Mytemple3.png",
//     imageAlt: "",
//     imageStyle: {
//       color: "transparent",
//       height: "184px",
//       width: "190px",
//     },
//   },
//   {
//     title: "Visual Math",
//     description:
//       "plataforma educativa diseñada para transformar conceptos matemáticos abstractos en experiencias visuales tangibles. A través de una interfaz dinámica, el proyecto utiliza la relación entre números y geometría tridimensional (cubos) para facilitar la comprensión de volúmenes, conteo y lógica espacial. Implementa múltiples modos de juego.",
//     technologies: [
//       "chadCn",
//       "NextJs",
//       "Tailwind",
//       "Prisma",
//       "Supabase",
//       "SocketIO",
//       "Echarts",
//     ],
//     url: "https://visual-math-one.vercel.app",
//     image: "/Math.png",
//     imageAlt: "math",
//     imageStyle: {
//       color: "transparent",
//       height: "184px",
//       width: "190px",
//     },
//   },
//   {
//     title: "Solar Way",
//     description:
//       "Understand and optimize your energy consumption with our comprehensive suite of tools. Track energy usage of individual appliances. Visualize consumption patterns with interactive charts. Calculate potential savings with energy-efficient alternatives. Plan solar installations based on your actual energy needs",
//     technologies: [
//       "chadCn",
//       "NextJs",
//       "Tailwind",
//       "Zod",
//       "Docker",
//       "MongoDB",
//       "SocketIO",
//       "Echarts",
//     ],
//     url: "https://pvcalculator.jsescobar.pro/",
//     image: "/SolarCalculator1.png",
//     imageAlt: "",
//     imageStyle: {
//       color: "transparent",
//       height: "184px",
//       width: "190px",
//     },
//   },
//   {
//     title: "Delicipes Plan. Shop. Eat.",
//     description:
//       "meal planning with detailed recipes, cost calculations, and easy-to-use planners. Generate grocery lists based on your weekly meal plan and stay within budget effortlessly",
//     technologies: [
//       "S3",
//       "NextJs",
//       "MongoDB",
//       "Tailwind",
//       "Shadcn",
//       "Clerk",
//       "Docker",
//       "Zustand",
//     ],
//     url: "https://veganplan.jsescobar.pro/",
//     image: "/Delicipese.png",
//     imageAlt: "Delicipes",
//     imageStyle: { color: "transparent" },
//   },
//   {
//     title: "Rental Insights",
//     description:
//       "Gestiona tus propiedades, controla tus costos y obtén métricas claras sobre ingresos, gastos y margen operativo.",
//     technologies: [
//       "S3",
//       "NextJs",
//       "MongoDB",
//       "Tailwind",
//       "Shadcn",
//       "Clerk",
//       "Docker",
//       "Zustand",
//     ],
//     url: "https://rental-insights.vercel.app/",
//     image: "/Rental.png",
//     imageAlt: "Rental Insigths",
//     imageStyle: { color: "transparent" },
//   },
//   {
//     title: "Soccer Ligue , Plan and register",
//     description:
//       "The data from you local soccer ligue presented in an clean structured way plan matches, manage teams players and referees ass well as you sport scenarios. register the results to acces team and player statistics.",
//     technologies: [
//       "S3",
//       "NextJs",
//       "Supabase",
//       "Tailwind",
//       "Shadcn",
//       "Docker",
//       "Zustand",
//     ],
//     url: "https://soccer.jsescobar.pro/",
//     image:
//       "https://tqheuy3b23.ufs.sh/f/3nPJ2rcd2SU4JkdU33y7MuK10SFx69DosXtPACk5plhTc4Hv",
//     imageAlt: "socoer",
//     imageStyle: { color: "transparent", height: "170px" },
//   },
// ];
const projectsData = [
  {
    title: "Cocina Pro",
    descriptionEN:
      "A professional high-precision quoting and 3D visualization platform for industrial kitchen installers. It streamlines project management and client delivery in a unified dashboard.",
    descriptionES:
      "Plataforma profesional de cotización de alta precisión y visualización 3D para instaladores de cocinas. Optimiza la gestión de proyectos y la entrega al cliente en un panel unificado.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "Neon DB",
      "Socket.io",
      "Echarts",
      "Shadcn/ui",
    ],
    capabilities: [
      "3D Visualization",
      "Real-time Quoting",
      "Project Management",
    ],
    tags: ["SaaS", "Industrial Ops", "B2B"],
    url: "https://mytemple-three.vercel.app",
    image: "/CocinaPro.png",
  },
  {
    title: "QR Inventory",
    descriptionEN:
      "Enterprise-grade inventory management system using dynamic QR generation. Designed for real-time asset tracking and collaborative logistics with high-performance dashboards.",
    descriptionES:
      "Sistema de gestión de inventarios de nivel empresarial con generación dinámica de QR. Diseñado para el seguimiento de activos en tiempo real y logística colaborativa.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "Socket.io",
      "Neon",
      "Shadcn/ui",
    ],
    capabilities: [
      "Asset Tracking",
      "Dynamic QR Systems",
      "Inventory Analytics",
    ],
    tags: ["Logistics", "Process Automation", "Enterprise"],
    url: "https://inventory-rho-two.vercel.app",
    image: "/inventarioQR.png",
  },
  {
    title: "My Temple",
    descriptionEN:
      "A metabolic modeling engine that processes real-time biometric data. It utilizes machine learning principles to adapt and predict physiological trends based on user inputs.",
    descriptionES:
      "Motor de modelado metabólico que procesa datos biométricos en tiempo real. Utiliza principios de machine learning para predecir tendencias fisiológicas.",
    technologies: ["Next.js", "Supabase", "Echarts", "Zustand", "Tailwind CSS"],
    capabilities: [
      "Biometric Modeling",
      "Real-time Analytics",
      "Predictive Engines",
    ],
    tags: ["HealthTech", "Data Science", "Performance"],
    url: "https://mytemple-three.vercel.app",
    image: "/Mytemple3.png",
  },
  {
    title: "Visual Math",
    descriptionEN:
      "An interactive EdTech environment transforming abstract calculus into 3D spatial geometry. Features multiple challenge modes and gamified learning via volume-based visual logic.",
    descriptionES:
      "Entorno interactivo EdTech que transforma el cálculo abstracto en geometría espacial 3D. Incluye modos de desafío y aprendizaje gamificado.",
    technologies: [
      "Next.js",
      "Three.js",
      "Tailwind CSS",
      "Shadcn/ui",
      "Canvas API",
    ],
    capabilities: ["Gamification", "Spatial Logic", "Educational UI/UX"],
    tags: ["EdTech", "3D Graphics", "Interactive"],
    url: "https://visual-math-one.vercel.app",
    image: "/Math.png",
  },
  {
    title: "Solar Way",
    descriptionEN:
      "Advanced solar energy optimizer featuring a 5-parameter modeling engine for photovoltaic performance. Includes interactive patterns for consumption and infrastructure planning.",
    descriptionES:
      "Optimizador de energía solar avanzado con un motor de modelado de 5 parámetros para el rendimiento fotovoltaico y planificación de infraestructura.",
    technologies: [
      "Next.js",
      "Docker",
      "MongoDB",
      "Echarts",
      "Zod",
      "Tailwind CSS",
    ],
    capabilities: [
      "Energy Modeling",
      "Cost-Benefit Analysis",
      "Resource Planning",
    ],
    tags: ["CleanTech", "Sustainability", "Smart Infrastructure"],
    url: "https://pvcalculator.jsescobar.pro/",
    image: "/SolarCalculator1.png",
  },
  {
    title: "MidSummer",
    descriptionEN:
      " Funel for Advanced solar energy Dimentioning and Quotte in Real Time, featuring a 5-parameter modeling engine for photovoltaic performance. Includes interactive patterns for consumption and infrastructure planning.",
    descriptionES:
      "Optimizador de energía solar avanzado con un motor de modelado de 5 parámetros para el rendimiento fotovoltaico y planificación de infraestructura.",
    technologies: [
      "Next.js",
      "Docker",
      "MongoDB",
      "Echarts",
      "Zod",
      "Tailwind CSS",
    ],
    capabilities: [
      "Energy Modeling",
      "Cost-Benefit Analysis",
      "Real Time Interaction",
      "Resource Planning",
    ],
    tags: ["CleanTech", "Sustainability", "Smart Infrastructure"],
    url: "https://pvcalculator.jsescobar.pro/",
    image: "/MidSummer.png",
  },
  {
    title: "Delicipes",
    descriptionEN:
      "A logistics-focused meal planning system with automated cost calculation and dynamic procurement lists. Designed for high-volume kitchen operations and structured meal workflows.",
    descriptionES:
      "Sistema de planificación de comidas enfocado en logística con cálculo automático de costos y listas de adquisición dinámicas.",
    technologies: [
      "Next.js",
      "AWS S3",
      "MongoDB",
      "Clerk Auth",
      "Zustand",
      "Docker",
    ],
    capabilities: [
      "Automated Procurement",
      "Cost Management",
      "Supply Chain Logistics",
    ],
    tags: ["Logistics", "FoodTech", "Operations"],
    url: "https://veganplan.jsescobar.pro/",
    image: "/Delicipese.png",
  },
  {
    title: "Rental Insights",
    descriptionEN:
      "Financial command center for real estate operations. It provides clear metrics on revenue margins, operational costs, and investment performance tracking.",
    descriptionES:
      "Centro de comando financiero para operaciones inmobiliarias. Proporciona métricas claras sobre márgenes de ingresos y costos operativos.",
    technologies: [
      "Next.js",
      "MongoDB",
      "Clerk",
      "Tailwind CSS",
      "Zustand",
      "Shadcn/ui",
    ],
    capabilities: [
      "Financial Dashboards",
      "Operational Auditing",
      "KPI Tracking",
    ],
    tags: ["FinTech", "PropTech", "Business Intelligence"],
    url: "https://rental-insights.vercel.app/",
    image: "/Rental.png",
  },
  {
    title: "Soccer League Pro",
    descriptionEN:
      "Centralized tournament infrastructure for sports organizations. Manages teams, referee logistics, and real-time match statistics through a clean, high-performance interface.",
    descriptionES:
      "Infraestructura centralizada para torneos deportivos. Gestiona equipos, logística de árbitros y estadísticas de partidos en tiempo real.",
    technologies: [
      "Next.js",
      "Supabase",
      "Zustand",
      "Docker",
      "Tailwind CSS",
      "Shadcn/ui",
    ],
    capabilities: [
      "Event Scheduling",
      "Real-time Statistics",
      "Team Management",
    ],
    tags: ["SportTech", "Event Management", "Scheduling"],
    url: "https://soccer.jsescobar.pro/",
    image:
      "https://tqheuy3b23.ufs.sh/f/3nPJ2rcd2SU4JkdU33y7MuK10SFx69DosXtPACk5plhTc4Hv",
  },
];

export default function ProjectsSection({ handleImageLoad }) {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-4 mb-4 w-screen bg-slate-900/75 px-4 py-5 backdrop-blur md:-mx-6 md:px-6 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
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
