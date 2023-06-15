import {
  FuzzyDate,
  ITitle,
  MediaFormat,
  MediaStatus,
  SubOrSub,
  Trailer,
  TvType,
} from './models.interface';

export interface IAnimeResult {
  id: string;
  title: string | ITitle;
  url?: string;
  image?: string;
  cover?: string;
  status?: MediaStatus;
  rating?: number;
  type?: MediaFormat | TvType;
  releaseDate?: string;
  [x: string]: unknown;
}

export interface IAnimeInfo extends IAnimeResult {
  malId?: number | string;
  genres?: string[];
  description?: string;
  status?: MediaStatus;
  totalEpisodes?: number;
  /**
   * @deprecated use `hasSub` or `hasDub` instead
   */
  subOrDub?: SubOrSub;
  hasSub?: boolean;
  hasDub?: boolean;
  synonyms?: string[];
  /**
   * two letter representation of coutnry: e.g JP for japan
   */
  countryOfOrigin?: string;
  isAdult?: boolean;
  isLicensed?: boolean;
  /**
   * `FALL`, `WINTER`, `SPRING`, `SUMMER`
   */
  season?: string;
  studios?: string[];
  color?: string;
  cover?: string;
  trailer?: Trailer;
  episodes?: IAnimeEpisode[];
  startDate?: FuzzyDate;
  endDate?: FuzzyDate;
  recommendations?: IAnimeResult[];
  relations?: IAnimeResult[];
}
export interface IAnimeEpisodeV2 {
  [x: string]: {
    id: string;
    season_number: number;
    title: string;
    image: string;
    description: string;
    releaseDate: string;
    isHD: boolean;
    isAdult: boolean;
    isDubbed: boolean;
    isSubbed: boolean;
    duration: number;
  }[];
}
export interface IAnimeEpisode {
  id: string;
  number: number;
  title?: string;
  description?: string;
  isFiller?: boolean;
  url?: string;
  image?: string;
  releaseDate?: string;
  [x: string]: unknown;
}
