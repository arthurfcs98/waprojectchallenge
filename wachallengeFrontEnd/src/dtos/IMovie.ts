interface IMovie {
  id: string;
  title: string;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: Date;
  vote_average: string;
}

export type { IMovie };
