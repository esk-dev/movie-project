import { Injectable } from '@angular/core';
import { Link } from '@core/models/layout.interface';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  private links: BehaviorSubject<Link[]> = new BehaviorSubject<Link[]>([
    { path: '/main', name: 'Main' },
    { path: '/search', name: 'Search' },
  ]);

  public links$: Observable<Link[]> = this.links.asObservable();
}
