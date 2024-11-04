export default function MovieList({arr, text}) {
    return (
      <>
        {arr.length != 0 ? (
          
          <div className="flex gap-4 mb-8 ">
  
            {arr.map((data) => (
              <div key={data.id} className="gap-5 flex flex-col justify-end">
                <h3>{data.title}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/w185${data.poster_path}`}
                  alt={data.title}
                />
              </div>
            ))}
          </div>
        ) : (
          <h2>Você não tem nenhum filme {text}</h2>
        )}
      </>
    );
  }