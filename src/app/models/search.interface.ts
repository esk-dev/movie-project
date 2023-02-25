/**
 * GET API_ENDPOINT/{lang?}/API/{SearchTitle || SearchSeries}/{apiKey}/{expression}
 *
 * Search into all Movies or Series.
 *
 * Req Movies
 *
 * https://imdb-api.com/en/API/SearchMovie/k_xtss02ao/{expression}
 *
 * Req Series
 *
 * https://imdb-api.com/en/API/SearchSeries/k_xtss02ao/{expression}
 */
export interface ISearch {
  searchType: 'string';
  expression: 'string';
  results: [
    {
      id: 'string';
      resultType: 'string';
      image: 'string';
      title: 'string';
      description: 'string';
    }
  ];
  errorMessage: 'string';
}
