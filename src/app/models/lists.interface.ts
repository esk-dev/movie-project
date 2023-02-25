export interface ITop {
  items: [
    {
      id: 'string';
      rank: 'string';
      title: 'string';
      fullTitle: 'string';
      year: 'string';
      image: 'string';
      crew: 'string';
      imDbRating: 'string';
      imDbRatingCount: 'string';
    }
  ];
  errorMessage: 'string';
}

/**
 * GET API_ENDPOINT/{lang?}/API/Top250Movies/{apiKey}
 *
 * Get Top 250 Movies.
 *
 * Req
 *
 * https://imdb-api.com/en/API/Top250Movies/k_xtss02ao
 */
export interface ITopMovies extends ITop {}
/**
 * GET API_ENDPOINT/{lang?}/API/Top250TVs/{apiKey}
 *
 * Get Top 250 Series TVs.
 *
 * Req
 *
 * https://imdb-api.com/en/API/Top250TVs/k_xtss02ao
 */
export interface ITopTvs extends ITop {}
/**
 * GET API_ENDPOINT/{lang?}/API/MostPopularMovies/{apiKey}
 *
 * Get Top 100 Most Polular Movies.
 *
 * Req
 *
 * https://imdb-api.com/en/API/MostPopularMovies/k_xtss02ao
 */
export interface IPopularMovies extends ITop {}
/**
 * GET API_ENDPOINT/{lang?}/API/MostPopularTVs/{apiKey}
 *
 * Get Top 100 Most Polular Series TVs.
 *
 * Req
 *
 * https://imdb-api.com/en/API/MostPopularTVs/k_xtss02ao
 */
export interface IPopularTvs extends ITop {}
