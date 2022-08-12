import { useEffect, useState } from "react";
import { FaExclamation } from "react-icons/fa";
import { LoadingModal } from "../components/MoadingModal/LoadingModal";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { IMovie } from "../dtos/IMovie";
import { movieApi } from "../shared/movieApi";

function HomePage() {
  const pages = [1, 2, 3, 4];

  const [refresh_page, setRefreshPage] = useState<number>(1);

  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const refreshAndSetMovies = async () => {
    setIsLoading(true);
    try {
      await movieApi.post("/", {}, { params: { refresh_page } });

      const { data: responseMovies } = (await movieApi.get("/", {
        params: { page: 1 },
      })) as { data: IMovie[] };
      setRefreshPage(refresh_page + 1);
      setMovies(responseMovies);
      setIsLoading(false);
      return;
    } catch (error) {
      setIsError(true);
      return;
    }
  };

  const getMoviesByPage = async (page: number) => {
    setIsLoading(true);
    try {
      const { data: responseMovies } = (await movieApi.get("/", {
        params: { page },
      })) as { data: IMovie[] };
      setIsLoading(false);
      setMovies(responseMovies);
    } catch (error) {
      setIsError(true);
      console.log("entrou");
      return;
    }
  };

  useEffect(() => {
    refreshAndSetMovies();
  }, []);

  return (
    <>
      {!isError ? (
        <div className="bg-black min-h-screen flex flex-col text-center items-center">
          <div className="bg-gradient-to-b from-teal-900 to-black h-52 w-full">
            <p className="text-gray-300 font-bold flex-1 font-mono text-6xl mt-10">
              OS Filmes Mais Populares<br></br>da{" "}
              <span className="text-teal-500">Atualidade!</span>
            </p>
          </div>
          <div className="flex justify-between w-full px-36 items-center">
            <button
              onClick={refreshAndSetMovies}
              className="ml-2 text-2xl p-2 bg-black rounded-lg font-medium text-teal-600 mb-10 border-2 border-gray-900 hover:bg-gray-900"
            >
              Atualizar Catalogo
            </button>
            <div className="flex text-white mb-10 bg-gray-900">
              {pages.map((pagination) => {
                if (pagination === 1) {
                  return (
                    <button
                      key={pagination}
                      onClick={(e) => {
                        e.preventDefault();
                        const page = (e.target as HTMLButtonElement).value;
                        getMoviesByPage(Number(page));
                      }}
                      value={pagination}
                      className="border-2 border-gray-800 px-3 p-1 text-lg hover:bg-slate-800 font-semibold"
                    >
                      {pagination}
                    </button>
                  );
                }
                return (
                  <button
                    key={pagination}
                    onClick={(e) => {
                      e.preventDefault();
                      const page = (e.target as HTMLButtonElement).value;
                      getMoviesByPage(Number(page));
                    }}
                    value={pagination}
                    className="border-2 border-l-0 border-gray-800 px-3 p-1 text-lg hover:bg-slate-800 font-semibold"
                  >
                    {pagination}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-10 px-32 place-items-center">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                imgUrl={movie.poster_path}
                language={movie.original_language}
                overview={movie.overview}
                stars={movie.vote_average}
                year={new Date(movie.release_date).getFullYear()}
              />
            ))}
          </div>

          <div className="flex text-white mt-5 mb-10 bg-gray-900">
            {pages.map((page) => {
              if (page === 1) {
                return (
                  <button
                    key={page}
                    onClick={(e) => {
                      e.preventDefault();
                      const page = (e.target as HTMLButtonElement).value;
                      getMoviesByPage(Number(page));
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
                    const page = (e.target as HTMLButtonElement).value;
                    getMoviesByPage(Number(page));
                  }}
                  value={page}
                  className="border-2 border-l-0 border-gray-800 px-3 p-1 text-lg hover:bg-slate-800 font-semibold"
                >
                  {page}
                </button>
              );
            })}
          </div>
          {isLoading && <LoadingModal />}
        </div>
      ) : (
        <div className="bg-black min-h-screen flex flex-col text-center items-center">
          <div className="bg-gradient-to-b from-teal-900 to-black h-52 w-full flex-1">
            <p className="text-gray-300 font-bold flex-1 font-mono text-6xl mt-44 px-28">
              Desculpe o transtorno, tente recarregar a pagina ou acessar mais
              tarde. <br />
              <br />
              {":("}
              <br />
            </p>
          </div>
          <FaExclamation size={200} color="white" className="mb-52 mt-20" />
        </div>
      )}
    </>
  );
}

export { HomePage };
