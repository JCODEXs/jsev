import TechnologyTag from "./TechnologyTag";

export default function ExperienceItem({ experience, lang = "EN" }) {
  const {
    period,
    title,
    company,
    companyUrl,
    role,
    descriptionEN,
    descriptionES,
    technologies = [],
    capabilities = [], // Nuevas capacidades
    links = [],
  } = experience;

  // Selección de idioma
  const description = lang === "EN" ? descriptionEN : descriptionES;

  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        {/* Fondo con efecto hover */}
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

        {/* COLUMNA TEMPORAL (Izquierda) */}
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
          aria-label={period}
        >
          {period}
        </header>

        {/* COLUMNA DE CONTENIDO (Derecha) */}
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                href={companyUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} at ${company}`}
              >
                {/* El span absoluto permite que todo el bloque sea clickeable */}
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span className="flex items-center gap-1">
                  {title} · {company}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>

            {role && (
              <div
                className="text-slate-400 font-normal text-sm mt-0.5"
                aria-hidden="true"
              >
                {role}
              </div>
            )}
          </h3>

          <p className="mt-3 text-sm leading-normal text-slate-400">
            {description}
          </p>

          {/* CAPABILITIES (Logros técnicos / industriales) */}
          {capabilities.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              {capabilities.map((cap, i) => (
                <span
                  key={i}
                  className="flex items-center text-[11px] text-slate-300/80"
                >
                  <span className="mr-1.5 h-1 w-1 rounded-full bg-teal-400/50"></span>
                  {cap}
                </span>
              ))}
            </div>
          )}

          {/* ENLACES RELACIONADOS (Links de proyectos) */}
          {links.length > 0 && (
            <ul
              className="mt-3 flex flex-wrap gap-3"
              aria-label="Related links"
            >
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    className="relative z-20 inline-flex items-center text-xs font-medium text-slate-200 hover:text-teal-300 transition-colors"
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mr-1 h-3 w-3"
                    >
                      <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                    </svg>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* TECNOLOGÍAS */}
          {technologies.length > 0 && (
            <ul
              className="mt-4 flex flex-wrap gap-1.5"
              aria-label="Technologies used"
            >
              {technologies.map((tech, index) => (
                <TechnologyTag key={index} technology={tech} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}
