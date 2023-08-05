import { data } from '../mock-data';
import { Observable, of } from 'rxjs';
import { Component } from '@angular/core';
import { IMovieInfo } from '@models/movie.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public movies$: Observable<IMovieInfo[]> = of(data);
}
// 0(pin):"movie/watch-the-lord-of-the-rings-16510"
// 1(pin):"movie/watch-lord-of-the-flies-13292"
// 2(pin):"movie/watch-lord-of-the-flies-13370"
// 3(pin):"movie/watch-lord-of-the-dance-56229"
// 4(pin):"movie/watch-lord-of-the-streets-80443"
// 5(pin):"movie/watch-lord-of-the-ants-93031"
