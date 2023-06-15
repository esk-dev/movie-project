import { ITitle, MediaFormat, MediaStatus, TvType } from './models.interface';

export interface IMovieResult {
  id: string;
  title: string | ITitle;
  url?: string;
  image?: string;
  releaseDate?: string;
  type?: TvType | MediaFormat;
  [x: string]: unknown;
}

export interface IMovieInfo extends IMovieResult {
  cover?: string;
  recommendations?: IMovieResult[];
  genres?: string[];
  description?: string;
  rating?: number;
  status?: MediaStatus;
  duration?: string;
  production?: string;
  casts?: string[];
  tags?: string[];
  totalEpisodes?: number;
  seasons?: {
    season: number;
    image?: string;
    episodes: IMovieEpisode[];
  }[];
  episodes?: IMovieEpisode[];
}

export interface IMovieEpisode {
  id: string;
  title: string;
  url?: string;
  number?: number;
  season?: number;
  description?: string;
  image?: string;
  releaseDate?: string;
  [x: string]: unknown;
}
