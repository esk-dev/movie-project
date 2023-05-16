export enum TOPS {
  TOP_250_BEST_FILMS = 'TOP_250_BEST_FILMS',
  TOP_100_POPULAR_FILMS = 'TOP_100_POPULAR_FILMS',
}

export type TopTypes = 'TOP_250_BEST_FILMS' | 'TOP_100_POPULAR_FILMS';

export interface ITopFilm {
  filmId: number;
  nameRu: string;
  nameEn: string;
  year: string;
  filmLength: string;
  countries: [
    {
      country: string;
    }
  ];
  genres: [
    {
      genre: string;
    }
  ];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange: number;
}

export interface ITopFilms {
  pagesCount: number;
  films: ITopFilm[];
}
