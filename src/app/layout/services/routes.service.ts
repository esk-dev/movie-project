import { Injectable } from '@angular/core';
import { Link } from '../interfaces/link.interface';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  private links: BehaviorSubject<Link[]> = new BehaviorSubject<Link[]>([
    { path: `/`, name: 'default' },
    { path: '/', name: 'default 2' },
    { path: '/', name: 'default 3' },
    { path: '/', name: 'default 4' },
  ]);

  public links$: Observable<Link[]> = this.links.asObservable();
}
