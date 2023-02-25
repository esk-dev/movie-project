/**
 * GET API_ENDPOINT/lang/API/Title/{apiKey}/{id}/{options?}
 *
 * Options {FullActor, FullCast, Posters, Images, Trailer, Ratings, Wikipedia}
 *
 * Get Movies or Series TV information.
 *
 * Req with options
 *
 * https://imdb-api.com/en/API/Title/k_xtss02ao/tt1375666/FullActor,FullCast,Posters,Images,Trailer,Ratings
 */

export interface ITitleData {
  id: 'string';
  title: 'string';
  originalTitle: 'string';
  fullTitle: 'string';
  type: 'string';
  year: 'string';
  image: 'string';
  releaseDate: 'string';
  runtimeMins: 'string';
  runtimeStr: 'string';
  plot: 'string';
  plotLocal: 'string';
  plotLocalIsRtl: true;
  awards: 'string';
  directors: 'string';
  directorList: [
    {
      id: 'string';
      name: 'string';
    }
  ];
  writers: 'string';
  writerList: [
    {
      id: 'string';
      name: 'string';
    }
  ];
  stars: 'string';
  starList: [
    {
      id: 'string';
      name: 'string';
    }
  ];
  actorList: [
    {
      id: 'string';
      image: 'string';
      name: 'string';
      asCharacter: 'string';
    }
  ];
  fullCast: {
    imDbId: 'string';
    title: 'string';
    fullTitle: 'string';
    type: 'string';
    year: 'string';
    directors: {
      job: 'string';
      items: [
        {
          id: 'string';
          name: 'string';
          description: 'string';
        }
      ];
    };
    writers: {
      job: 'string';
      items: [
        {
          id: 'string';
          name: 'string';
          description: 'string';
        }
      ];
    };
    actors: [
      {
        id: 'string';
        image: 'string';
        name: 'string';
        asCharacter: 'string';
      }
    ];
    others: [
      {
        job: 'string';
        items: [
          {
            id: 'string';
            name: 'string';
            description: 'string';
          }
        ];
      }
    ];
    errorMessage: 'string';
  };
  genres: 'string';
  genreList: [
    {
      key: 'string';
      value: 'string';
    }
  ];
  companies: 'string';
  companyList: [
    {
      id: 'string';
      name: 'string';
    }
  ];
  countries: 'string';
  countryList: [
    {
      key: 'string';
      value: 'string';
    }
  ];
  languages: 'string';
  languageList: [
    {
      key: 'string';
      value: 'string';
    }
  ];
  contentRating: 'string';
  imDbRating: 'string';
  imDbRatingVotes: 'string';
  metacriticRating: 'string';
  ratings: {
    imDbId: 'string';
    title: 'string';
    fullTitle: 'string';
    type: 'string';
    year: 'string';
    imDb: 'string';
    metacritic: 'string';
    theMovieDb: 'string';
    rottenTomatoes: 'string';
    filmAffinity: 'string';
    errorMessage: 'string';
  };
  wikipedia: {
    imDbId: 'string';
    title: 'string';
    fullTitle: 'string';
    type: 'string';
    year: 'string';
    language: 'string';
    titleInLanguage: 'string';
    url: 'string';
    plotShort: {
      plainText: 'string';
      html: 'string';
    };
    plotFull: {
      plainText: 'string';
      html: 'string';
    };
    errorMessage: 'string';
  };
  posters: {
    imDbId: 'string';
    title: 'string';
    fullTitle: 'string';
    type: 'string';
    year: 'string';
    posters: [
      {
        id: 'string';
        link: 'string';
        aspectRatio: 0;
        language: 'string';
        width: 0;
        height: 0;
      }
    ];
    backdrops: [
      {
        id: 'string';
        link: 'string';
        aspectRatio: 0;
        language: 'string';
        width: 0;
        height: 0;
      }
    ];
    errorMessage: 'string';
  };
  images: {
    imDbId: 'string';
    title: 'string';
    fullTitle: 'string';
    type: 'string';
    year: 'string';
    items: [
      {
        title: 'string';
        image: 'string';
      }
    ];
    errorMessage: 'string';
  };
  trailer: {
    imDbId: 'string';
    title: 'string';
    fullTitle: 'string';
    type: 'string';
    year: 'string';
    videoId: 'string';
    videoTitle: 'string';
    videoDescription: 'string';
    thumbnailUrl: 'string';
    uploadDate: 'string';
    link: 'string';
    linkEmbed: 'string';
    errorMessage: 'string';
  };
  boxOffice: {
    budget: 'string';
    openingWeekendUSA: 'string';
    grossUSA: 'string';
    cumulativeWorldwideGross: 'string';
  };
  tagline: 'string';
  keywords: 'string';
  keywordList: ['string'];
  similars: [
    {
      id: 'string';
      title: 'string';
      image: 'string';
      imDbRating: 'string';
    }
  ];
  tvSeriesInfo: {
    yearEnd: 'string';
    creators: 'string';
    creatorList: [
      {
        id: 'string';
        name: 'string';
      }
    ];
    seasons: ['string'];
  };
  tvEpisodeInfo: {
    seriesId: 'string';
    seriesTitle: 'string';
    seriesFullTitle: 'string';
    seriesYear: 'string';
    seriesYearEnd: 'string';
    seasonNumber: 'string';
    episodeNumber: 'string';
    previousEpisodeId: 'string';
    nextEpisodeId: 'string';
  };
  errorMessage: 'string';
}
