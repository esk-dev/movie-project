import {
  animation,
  style,
  animate,
  trigger,
  transition,
  useAnimation,
  state,
  query,
  stagger,
} from '@angular/animations';

export const openCloseAnimtaion = trigger('openClose', [
  state(
    'open',
    style({
      borderRadius: 25,
      width: 290,
      height: 100,
    })
  ),
  state(
    'close',
    style({
      borderRadius: 18,
      width: 125,
      height: 35,
    })
  ),
  transition('open => close', animate('0.4s cubic-bezier(1,.27,.26,.78)')),
  transition('close => open', animate('0.4s cubic-bezier(1,.27,.26,.78)')),
]);

export const fadeAnimation = trigger('showHide', [
  transition(
    ':enter',
    query(':enter', [
      style({ opacity: 0 }),
      stagger('50ms', [animate('500ms ease-in', style({ opacity: 1 }))]),
    ])
  ),
  transition(':leave', [animate('1ms', style({ opacity: 0 }))]),
]);

// https://habr.com/ru/company/infowatch/blog/353150/
