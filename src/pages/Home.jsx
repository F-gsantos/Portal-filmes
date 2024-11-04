import CardContainer from "../components/CardContainer";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  
  if(!localStorage.getItem("verDepois")){
    localStorage.setItem("verDepois", JSON.stringify([]))
  }
  if(!localStorage.getItem("assistidos")){
    localStorage.setItem("assistidos", JSON.stringify([]))
  }

  return (
    <>
      <CardContainer titulo="Filmes Populares">
          <MovieCard search={"popular"}/>
       </CardContainer>
       <CardContainer titulo="Melhor Avaliados">
          <MovieCard search={"top_rated"}/>
       </CardContainer>
       <CardContainer titulo="Lançamentos">
          <MovieCard search={"upcoming"}/>
       </CardContainer>
    </>
  );
}