import { FaLanguage, FaStar } from "react-icons/fa";

function MovieCard() {
  return (
    <div className="bg-gray-900 relative">
      <div className="p-5 h-2/4">
        <img
          className=" object-cover"
          src="https://image.tmdb.org/t/p/original/6OEBp0Gqv6DsOgi8diPUslT2kbA.jpg"
          alt="movie banner"
        />
      </div>
      <div className="px-5 pb-5 text-justify text-white">
        <div className="flex justify-start items-center mb-2">
          <FaLanguage className="mr-2 text-yellow-400" size={20} />
          <span className="text-sm">EN.</span>
        </div>
        <p id="a" className="line-clamp-6">
          Thor parte em uma jornada diferente de tudo que já enfrentou – uma
          busca pela paz interior. Mas sua aposentadoria é interrompida por um
          assassino galáctico conhecido como Gorr, o Carniceiro de Deus, que
          busca a extinção dos deuses. Para combater a ameaça, Thor pede a ajuda
          do Rei Valquíria, Korg e da ex-namorada Jane Foster, que – para
          surpresa de Thor – inexplicavelmente empunha seu martelo mágico,
          Mjolnir, como o Poderoso Thor. Juntos, eles embarcam em uma
          angustiante aventura cósmica para descobrir o mistério da vingança do
          God Butcher e detê-lo antes que seja tarde demais.
        </p>
        <div className="flex justify-between mt-5">
          <span className="font-bold text-lg">2022</span>
          <div className="flex justify-center items-center">
            <span className="text-xl">7.5</span>
            <FaStar className="ml-2 text-yellow-400" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export { MovieCard };
