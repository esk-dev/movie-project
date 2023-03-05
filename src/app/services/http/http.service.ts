/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ITopMovies,
  ITopTvs,
  IPopularTvs,
  IPopularMovies,
} from './../../models/index';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
const DB = {
  items: [
    {
      id: 'tt0111161',
      rank: '1',
      title: 'The Shawshank Redemption',
      fullTitle: 'The Shawshank Redemption (1994)',
      year: '1994',
      image:
        'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Frank Darabont (dir.), Tim Robbins, Morgan Freeman',
      imDbRating: '9.2',
      imDbRatingCount: '2709256',
    },
    {
      id: 'tt0068646',
      rank: '2',
      title: 'The Godfather',
      fullTitle: 'The Godfather (1972)',
      year: '1972',
      image:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg',
      crew: 'Francis Ford Coppola (dir.), Marlon Brando, Al Pacino',
      imDbRating: '9.2',
      imDbRatingCount: '1881416',
    },
    {
      id: 'tt0468569',
      rank: '3',
      title: 'The Dark Knight',
      fullTitle: 'The Dark Knight (2008)',
      year: '2008',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Christopher Nolan (dir.), Christian Bale, Heath Ledger',
      imDbRating: '9.0',
      imDbRatingCount: '2682293',
    },
    {
      id: 'tt0071562',
      rank: '4',
      title: 'The Godfather Part II',
      fullTitle: 'The Godfather Part II (1974)',
      year: '1974',
      image:
        'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg',
      crew: 'Francis Ford Coppola (dir.), Al Pacino, Robert De Niro',
      imDbRating: '9.0',
      imDbRatingCount: '1284542',
    },
    {
      id: 'tt0050083',
      rank: '5',
      title: '12 Angry Men',
      fullTitle: '12 Angry Men (1957)',
      year: '1957',
      image:
        'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb',
      imDbRating: '9.0',
      imDbRatingCount: '800379',
    },
    {
      id: 'tt0108052',
      rank: '6',
      title: "Schindler's List",
      fullTitle: "Schindler's List (1993)",
      year: '1993',
      image:
        'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes',
      imDbRating: '8.9',
      imDbRatingCount: '1368842',
    },
    {
      id: 'tt0167260',
      rank: '7',
      title: 'The Lord of the Rings: The Return of the King',
      fullTitle: 'The Lord of the Rings: The Return of the King (2003)',
      year: '2003',
      image:
        'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Peter Jackson (dir.), Elijah Wood, Viggo Mortensen',
      imDbRating: '8.9',
      imDbRatingCount: '1864656',
    },
    {
      id: 'tt0110912',
      rank: '8',
      title: 'Pulp Fiction',
      fullTitle: 'Pulp Fiction (1994)',
      year: '1994',
      image:
        'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Quentin Tarantino (dir.), John Travolta, Uma Thurman',
      imDbRating: '8.8',
      imDbRatingCount: '2079950',
    },
    {
      id: 'tt0120737',
      rank: '9',
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      fullTitle: 'The Lord of the Rings: The Fellowship of the Ring (2001)',
      year: '2001',
      image:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Peter Jackson (dir.), Elijah Wood, Ian McKellen',
      imDbRating: '8.8',
      imDbRatingCount: '1894163',
    },
    {
      id: 'tt0060196',
      rank: '10',
      title: 'The Good, the Bad and the Ugly',
      fullTitle: 'The Good, the Bad and the Ugly (1966)',
      year: '1966',
      image:
        'https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Sergio Leone (dir.), Clint Eastwood, Eli Wallach',
      imDbRating: '8.8',
      imDbRatingCount: '768982',
    },
    {
      id: 'tt0109830',
      rank: '11',
      title: 'Forrest Gump',
      fullTitle: 'Forrest Gump (1994)',
      year: '1994',
      image:
        'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Robert Zemeckis (dir.), Tom Hanks, Robin Wright',
      imDbRating: '8.8',
      imDbRatingCount: '2105030',
    },
    {
      id: 'tt0137523',
      rank: '12',
      title: 'Fight Club',
      fullTitle: 'Fight Club (1999)',
      year: '1999',
      image:
        'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6716_AL_.jpg',
      crew: 'David Fincher (dir.), Brad Pitt, Edward Norton',
      imDbRating: '8.7',
      imDbRatingCount: '2153274',
    },
    {
      id: 'tt0167261',
      rank: '13',
      title: 'The Lord of the Rings: The Two Towers',
      fullTitle: 'The Lord of the Rings: The Two Towers (2002)',
      year: '2002',
      image:
        'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Peter Jackson (dir.), Elijah Wood, Ian McKellen',
      imDbRating: '8.7',
      imDbRatingCount: '1683674',
    },
    {
      id: 'tt1375666',
      rank: '14',
      title: 'Inception',
      fullTitle: 'Inception (2010)',
      year: '2010',
      image:
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Christopher Nolan (dir.), Leonardo DiCaprio, Joseph Gordon-Levitt',
      imDbRating: '8.7',
      imDbRatingCount: '2380259',
    },
    {
      id: 'tt0080684',
      rank: '15',
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      fullTitle: 'Star Wars: Episode V - The Empire Strikes Back (1980)',
      year: '1980',
      image:
        'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Irvin Kershner (dir.), Mark Hamill, Harrison Ford',
      imDbRating: '8.7',
      imDbRatingCount: '1305020',
    },
    {
      id: 'tt0133093',
      rank: '16',
      title: 'The Matrix',
      fullTitle: 'The Matrix (1999)',
      year: '1999',
      image:
        'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Lana Wachowski (dir.), Keanu Reeves, Laurence Fishburne',
      imDbRating: '8.7',
      imDbRatingCount: '1932760',
    },
    {
      id: 'tt0099685',
      rank: '17',
      title: 'Goodfellas',
      fullTitle: 'Goodfellas (1990)',
      year: '1990',
      image:
        'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Martin Scorsese (dir.), Robert De Niro, Ray Liotta',
      imDbRating: '8.7',
      imDbRatingCount: '1175059',
    },
    {
      id: 'tt0073486',
      rank: '18',
      title: "One Flew Over the Cuckoo's Nest",
      fullTitle: "One Flew Over the Cuckoo's Nest (1975)",
      year: '1975',
      image:
        'https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Milos Forman (dir.), Jack Nicholson, Louise Fletcher',
      imDbRating: '8.6',
      imDbRatingCount: '1016818',
    },
    {
      id: 'tt0114369',
      rank: '19',
      title: 'Se7en',
      fullTitle: 'Se7en (1995)',
      year: '1995',
      image:
        'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6716_AL_.jpg',
      crew: 'David Fincher (dir.), Morgan Freeman, Brad Pitt',
      imDbRating: '8.6',
      imDbRatingCount: '1672851',
    },
    {
      id: 'tt0047478',
      rank: '20',
      title: 'Seven Samurai',
      fullTitle: 'Seven Samurai (1954)',
      year: '1954',
      image:
        'https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_Ratio0.7015_AL_.jpg',
      crew: 'Akira Kurosawa (dir.), Toshirô Mifune, Takashi Shimura',
      imDbRating: '8.6',
      imDbRatingCount: '349318',
    },
    {
      id: 'tt0038650',
      rank: '21',
      title: "It's a Wonderful Life",
      fullTitle: "It's a Wonderful Life (1946)",
      year: '1946',
      image:
        'https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Frank Capra (dir.), James Stewart, Donna Reed',
      imDbRating: '8.6',
      imDbRatingCount: '467510',
    },
    {
      id: 'tt0102926',
      rank: '22',
      title: 'The Silence of the Lambs',
      fullTitle: 'The Silence of the Lambs (1991)',
      year: '1991',
      image:
        'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Jonathan Demme (dir.), Jodie Foster, Anthony Hopkins',
      imDbRating: '8.6',
      imDbRatingCount: '1448382',
    },
    {
      id: 'tt0120815',
      rank: '23',
      title: 'Saving Private Ryan',
      fullTitle: 'Saving Private Ryan (1998)',
      year: '1998',
      image:
        'https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Steven Spielberg (dir.), Tom Hanks, Matt Damon',
      imDbRating: '8.6',
      imDbRatingCount: '1405892',
    },
    {
      id: 'tt0317248',
      rank: '24',
      title: 'City of God',
      fullTitle: 'City of God (2002)',
      year: '2002',
      image:
        'https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Fernando Meirelles (dir.), Alexandre Rodrigues, Leandro Firmino',
      imDbRating: '8.6',
      imDbRatingCount: '763441',
    },
    {
      id: 'tt0816692',
      rank: '25',
      title: 'Interstellar',
      fullTitle: 'Interstellar (2014)',
      year: '2014',
      image:
        'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Christopher Nolan (dir.), Matthew McConaughey, Anne Hathaway',
      imDbRating: '8.6',
      imDbRatingCount: '1867880',
    },
    {
      id: 'tt0118799',
      rank: '26',
      title: 'Life Is Beautiful',
      fullTitle: 'Life Is Beautiful (1997)',
      year: '1997',
      image:
        'https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Roberto Benigni (dir.), Roberto Benigni, Nicoletta Braschi',
      imDbRating: '8.6',
      imDbRatingCount: '703069',
    },
    {
      id: 'tt0120689',
      rank: '27',
      title: 'The Green Mile',
      fullTitle: 'The Green Mile (1999)',
      year: '1999',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_Ratio0.6716_AL_.jpg',
      crew: 'Frank Darabont (dir.), Tom Hanks, Michael Clarke Duncan',
      imDbRating: '8.6',
      imDbRatingCount: '1316891',
    },
    {
      id: 'tt0076759',
      rank: '28',
      title: 'Star Wars: Episode IV - A New Hope',
      fullTitle: 'Star Wars: Episode IV - A New Hope (1977)',
      year: '1977',
      image:
        'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_Ratio0.6716_AL_.jpg',
      crew: 'George Lucas (dir.), Mark Hamill, Harrison Ford',
      imDbRating: '8.5',
      imDbRatingCount: '1377431',
    },
    {
      id: 'tt0103064',
      rank: '29',
      title: 'Terminator 2: Judgment Day',
      fullTitle: 'Terminator 2: Judgment Day (1991)',
      year: '1991',
      image:
        'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6716_AL_.jpg',
      crew: 'James Cameron (dir.), Arnold Schwarzenegger, Linda Hamilton',
      imDbRating: '8.5',
      imDbRatingCount: '1110342',
    },
    {
      id: 'tt0088763',
      rank: '30',
      title: 'Back to the Future',
      fullTitle: 'Back to the Future (1985)',
      year: '1985',
      image:
        'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Robert Zemeckis (dir.), Michael J. Fox, Christopher Lloyd',
      imDbRating: '8.5',
      imDbRatingCount: '1220509',
    },
    {
      id: 'tt0245429',
      rank: '31',
      title: 'Spirited Away',
      fullTitle: 'Spirited Away (2001)',
      year: '2001',
      image:
        'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg',
      crew: 'Hayao Miyazaki (dir.), Daveigh Chase, Suzanne Pleshette',
      imDbRating: '8.5',
      imDbRatingCount: '775403',
    },
    {
      id: 'tt0253474',
      rank: '32',
      title: 'The Pianist',
      fullTitle: 'The Pianist (2002)',
      year: '2002',
      image:
        'https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.7313_AL_.jpg',
      crew: 'Roman Polanski (dir.), Adrien Brody, Thomas Kretschmann',
      imDbRating: '8.5',
      imDbRatingCount: '843119',
    },
  ],
  errorMessage: '',
};

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public fetchTopMovies(): Observable<ITopMovies> {
    return of(DB as ITopMovies);
    // return this.http.get<ITopMovies>(
    //   `https://imdb-api.com/en/API/Top250Movies/${environment.API_KEY}`
    // );
  }
}