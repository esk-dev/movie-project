import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden',
}

export enum Direction {
  Up = 'Up',
  Down = 'Down',
}

export const stickyAnimation = trigger('toggleStickyAnimation', [
  state(
    VisibilityState.Hidden,
    style({ opacity: 0, transform: 'translateY(-100%)' })
  ),
  state(
    VisibilityState.Visible,
    style({ opacity: 1, transform: 'translateY(0px)' })
  ),
  transition('* => *', animate('250ms ease-in')),
]);
