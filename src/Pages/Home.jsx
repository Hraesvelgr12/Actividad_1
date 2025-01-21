import { MoviesGrid } from "../Components/Movies.jsx";
import { Encabezado } from "../Components/Encabezado.jsx";

export function Home() {
  return (
    <>
      <Encabezado />

      <main className="main">
        <MoviesGrid />
      </main>
    </>
  );
}
