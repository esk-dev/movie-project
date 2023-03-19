export interface ITopMovie {
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

export interface IApiResponse {
  pageCount: number;
  films: ITopMovie[];
}
/**
 *
 */
export interface ITitleData {
  kinopoiskId: 301;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: boolean;
  productionStatus: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
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
  startYear: 1996;
  endYear: 1996;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}

export interface ITitleSeasons {
  total: number;
  items: [
    {
      number: number;
      episodes: [
        {
          seasonNumber: number;
          episodeNumber: number;
          nameRu: string;
          nameEn: string;
          synopsis: string;
          releaseDate: string;
        }
      ];
    }
  ];
}

export interface ITitleRating {
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
}
