import {
  style,
  animate,
  trigger,
  transition,
  state,
} from '@angular/animations';

export const openCloseAnimtaion = trigger('openClose', [
  state(
    'open',
    style({
      borderRadius: 10,
      width: 290,
      height: 100,
    })
  ),
  state(
    'close',
    style({
      borderRadius: 7,
      width: 125,
      height: 35,
    })
  ),
  transition('open => close', [animate('0.4s cubic-bezier(1,.27,.26,.78)')]),
  transition('close => open', [animate('0.4s cubic-bezier(1,.27,.26,.78)')]),
]);
