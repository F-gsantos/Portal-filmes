export default function MovieList({arr, text}) {
    return (
      <>
        {arr.length != 0 ? (
          
          <div className="flex gap-5 mb-8 ">
  
            {arr.map((data) => (
              <div key={data.id} className="gap-10 flex flex-col justify-end">
                <h3>{data.title}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/w185${data.poster_path}`}
                  alt={data.title}
                />
              </div>
            ))}
          </div>
        ) : (
          <h2> Sem filmes {text}</h2>
        )}
      </>
    );
  }