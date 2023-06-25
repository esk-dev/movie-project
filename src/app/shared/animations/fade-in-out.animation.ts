import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeSlideInOut = trigger('fadeSlideInOut', [
  transition(':enter', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        stagger('50ms', [
          animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
        ]),
      ],
      { optional: true }
    ),
  ]),
  transition(':leave', [
    animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
  ]),
]);

export const inOutAnimation = trigger('inOutAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.25s ease-in-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('0.25s ease-in-out', style({ opacity: 0 })),
  ]),
]);
