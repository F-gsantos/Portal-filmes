import { useState } from "react";
import CardContainer from "../components/CardContainer";
import GenreCard from "../components/GenreCard";
import Dropdown from "../components/Dropdown";

export default function GenreListPage() {
  const [Genero, SetGenero] = useState({ id: 28, name: "Ação" });

  const handleValueChange = (newValue) => {
    console.log(newValue); // Mostra o objeto do novo gênero
    SetGenero(newValue);
  };

  return (
    <>
      <h1>Filmes por gênero</h1>
      <Dropdown sendDataToParent={handleValueChange} />
      <CardContainer titulo={Genero.name}>
        <GenreCard id={Genero.id} />
      </CardContainer>
    </>
  );
}