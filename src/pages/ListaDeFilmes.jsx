import { useState } from "react";
import MovieList from "../components/MovieList";

function ListaDeFilmes() {
  const [verDepois, setVerDepois] = useState(() => {
    const verDepoisSalvo = localStorage.getItem("verDepois");
    return verDepoisSalvo ? JSON.parse(verDepoisSalvo) : [];
  });
  const [assistidos, setAssistidos] = useState(() => {
    const assistidosSalvos = localStorage.getItem("assistidos");
    return assistidosSalvos ? JSON.parse(assistidosSalvos) : [];
  });

  return (
    <>
      <h2 className="font-serif text-2xl mb-4">Assistidos</h2>
      <MovieList arr={assistidos} text="Assistidos" />
      <h2 className="font-serif text-2xl mb-4">Ver Depois</h2>
      <MovieList arr={verDepois} text="Ver Depois" />
    </>
  );
}

export default ListaDeFilmes;