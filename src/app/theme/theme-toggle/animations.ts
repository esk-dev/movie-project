import { animation, style, animate, trigger, transition, useAnimation } from '@angular/animations';

export const fadeIn = animation([
  style({
    opacity: 0,
    transform: translateY(10px);
  }),
  animate('100ms')
]);