import { FaLanguage, FaStar } from "react-icons/fa";

interface IMovieCardProps {
  title: string;
  imgUrl: string;
  language: string;
  overview: string;
  year: number;
  stars: string;
}

function MovieCard({
  title,
  imgUrl,
  overview,
  language,
  year,
  stars,
}: IMovieCardProps) {
  return (
    <div className="bg-gray-900">
      <img className="p-5" src={imgUrl} alt="movie banner" />

      <div className="px-5 pb-5 text-justify text-white h-64 flex flex-col justify-between">
        <div className="flex justify-start items-center mb-2">
          <FaLanguage className="mr-2 text-yellow-400" size={20} />
          <span className="text-sm mr-3">{language.toUpperCase()}.</span>
        </div>
        <span className="font-semibold text-sm text-teal-500">{title}</span>
        <p id="a" className="line-clamp-5 mt-2">
          {overview ? overview : ". . ."}
        </p>
        <div className="flex justify-between mt-5">
          <span className="font-bold text-lg">{year}</span>
          <div className="flex justify-center items-center">
            <span className="text-xl">{stars} / 10</span>
            <FaStar className="ml-2 text-yellow-400" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export { MovieCard };
