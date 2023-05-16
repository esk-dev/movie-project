export interface IApiResponse {
  total: number;
  items: IPremieres[];
}

export interface IPremieres {
  kinopoiskId: 4370148;
  nameRu: string;
  nameEn: string;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: [
    {
      country: string;
    }
  ];
  genres: [
    {
      genre: string;
    },
    {
      genre: string;
    }
  ];
  duration: number;
  premiereRu: '';
}
