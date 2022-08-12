import { MovieCard } from "../components/MovieCard/MovieCard";

function HomePage() {
  const pages = [1, 2, 3, 4];

  return (
    <div className="bg-black min-h-screen flex flex-col text-center items-center">
      <div className="bg-gradient-to-b from-teal-900 to-black h-52 w-full">
        <p className="text-gray-300 font-bold flex-1 font-mono text-6xl mt-10">
          OS Filmes Mais Populares<br></br>da{" "}
          <span className="text-teal-500">Atualidade!</span>
        </p>
      </div>
      <div className="flex justify-between w-full px-36 items-center">
        <button className="ml-2 text-2xl p-2 bg-black rounded-lg font-medium text-teal-600 mb-10 border-2 border-gray-900 hover:bg-gray-900">
          Atualizar Catalogo
        </button>
        <div className="flex text-white mb-10 bg-gray-900">
          {pages.map((page) => {
            if (page === 1) {
              return (
                <button
                  key={page}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log((e.target as HTMLButtonElement).value);
                  }}
                  value={page}
                  className="border-2 border-gray-800 px-3 p-1 text-lg hover:bg-slate-800 font-semibold"
                >
                  {page}
                </button>
              );
            }
            return (
              <button
                key={page}
                onClick={(e) => {
                  e.preventDefault();
                  console.log((e.target as HTMLButtonElement).value);
                }}
                value={page}
                className="border-2 border-l-0 border-gray-800 px-3 p-1 text-lg hover:bg-slate-800 font-semibold"
              >
                {page}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10 px-32 place-items-center">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>

      <div className="flex text-white mb-10 bg-gray-900">
        {pages.map((page) => {
          if (page === 1) {
            return (
              <button
                key={page}
                onClick={(e) => {
                  e.preventDefault();
                  console.log((e.target as HTMLButtonElement).value);
                }}
                value={page}
                className="border-2 border-gray-800 px-3 p-1 text-lg hover:bg-slate-800 font-semibold"
              >
                {page}
              </button>
            );
          }
          return (
            <button
              key={page}
              onClick={(e) => {
                e.preventDefault();
                console.log((e.target as HTMLButtonElement).value);
              }}
              value={page}
              className="border-2 border-l-0 border-gray-800 px-3 p-1 text-lg hover:bg-slate-800 font-semibold"
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { HomePage };
