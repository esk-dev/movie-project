import { Injectable } from '@angular/core';
import { Link } from '../interfaces/link.interface';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  private links: BehaviorSubject<Link[]> = new BehaviorSubject<Link[]>([
    { path: '/search', name: 'Search' },
  ]);

  public links$: Observable<Link[]> = this.links.asObservable();
}
