export default function TechnologyTag({ technology, index }) {
  return (
    <li
      style={{ "--delay": `${index * 100}ms` }}
      className="
        flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 
        transition-all duration-300
        /* Trigger the blue pulse when the card (group) is hovered */
        group-hover:animate-blue-pulse
      "
    >
      {technology}
    </li>
  );
}
