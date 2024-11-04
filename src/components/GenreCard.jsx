import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function GenreCard({id}) {
    
    // fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')
    
    
      const navigate = useNavigate();
      const [filmes, setfilmes] = useState([]);
      useEffect(() => {
        fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br&with_genres=${id}`
        )
          .then((res) => res.json())
          .then((res) => setfilmes(res.results))
          .catch((erro) => console.log(erro))
          .finally(() => console.log("Fim!"));
      }, [id]);
      return (
        <div className="flex items-center gap-6">
          {filmes.map((filme) => (
            <div
              className="flex flex-col justify-between w-52 h-[450px] text-center gap-2"
              key={filme.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w185${filme.poster_path}`}
                className="w-48"
              />
              <h3>{filme.title}</h3>
              <button
                className="p-3 bg-purple-500"
                onClick={() => navigate(`/movies/${filme.id}`)}
              >
                Saiba mais
              </button>
            </div>
          ))}
        </div>
      );
    }
    