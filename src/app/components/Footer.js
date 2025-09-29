export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <blockquote className="relative p-4 text-2xl italic text-gray-100 ">
        <span className="absolute top-0 left-0 -ml-4 text-5xl text-gray-50">
          &ldquo;
        </span>
        Simplicity is the utlimate sophistication.
        <span className="absolute bottom-0 right-0 -mr-1 text-5xl text-gray-50">
          &rdquo;
        </span>
      </blockquote>
      <cite className="block mt-4 text-xl text-right text-gray-100">
        - Leonardo da Vinci
      </cite>
    </footer>
  );
}
