export const Footer = () => {
  return (
    <footer className="bg-transparent py-12 mt-20 relative z-40">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm mb-2 font-light tracking-wide text-white">
          &copy; {new Date().getFullYear()} Antonio Tebar. Todos los derechos reservados.
        </p>
        <p className="text-sm font-semibold tracking-wide text-white">
          Diseñado y desarrollado por{" "}
          <a
            className="font-semibold text-[#39FF14]  transition-colors duration-300"
          >
            Antonio Tebar
          </a>
        </p>
        <p className="mt-6 text-xs font-thin opacity-70 italic text-white">
          Inspirando soluciones web con pasión y precisión.
        </p>
      </div>
    </footer>
  );
};
