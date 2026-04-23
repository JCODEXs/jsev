import Image from "next/image";
import TechnologyTag from "./TechnologyTag";

export default function ProjectItem({ project, handleImageLoad, lang = "EN" }) {
  const {
    title,
    descriptionEN,
    descriptionES,
    technologies,
    capabilities,
    tags,
    url,
    image,
    imageAlt,
    imageStyle,
  } = project;

  // Selección de idioma (puedes pasarle el estado de tu app)
  const description = lang === "EN" ? descriptionEN : descriptionES;

  return (
    <li className="mb-12">
      <a
        className="group/link relative block cursor-pointer transition-all"
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={title}
      >
        {/* Efecto de fondo al hacer hover (Glassmorphism) */}
        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

          {/* COLUMNA DE TEXTO (Derecha) */}
          <div className="z-10 sm:order-2 sm:col-span-5">
            <header className="flex flex-col gap-1">
              {/* TAGS DE INDUSTRIA (Nicho) */}
              <div className="flex gap-2 mb-1">
                {tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase tracking-widest text-teal-400/70 font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-medium leading-tight text-slate-200 group-hover/link:text-teal-300">
                <span className="flex items-center gap-1 text-base">
                  {title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </h3>
            </header>

            <p className="mt-2 text-sm leading-normal text-slate-400">
              {description}
            </p>

            {/* CAPABILITIES (Valores agregados) */}
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              {capabilities?.map((cap, i) => (
                <span
                  key={i}
                  className="flex items-center text-[11px] text-slate-300/80"
                >
                  <span className="mr-1.5 h-1 w-1 rounded-full bg-teal-400/50"></span>
                  {cap}
                </span>
              ))}
            </div>

            {/* TECNOLOGÍAS (Stack) */}
            {/* <ul
              className="mt-4 flex flex-wrap gap-1.5"
              aria-label="Technologies used:"
            >
              {technologies.map((tech, index) => (
                <TechnologyTag key={index} technology={tech} />
              ))}
            </ul> */}
          </div>

          {/* IMAGEN (Izquierda) */}
          <div className="z-10 sm:order-1 sm:col-span-3">
            <Image
              alt={imageAlt || title}
              loading="lazy"
              width="200"
              height="112"
              onLoad={handleImageLoad}
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:translate-y-1"
              style={imageStyle}
              src={image}
            />
          </div>
        </div>
      </a>
    </li>
  );
}
