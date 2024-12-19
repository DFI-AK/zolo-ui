import { animate, state, style, transition, trigger } from "@angular/animations";

export const slideLeft = trigger('slideToLeft', [
    state('right', style({ transform: "translateX(350px)" })),
    state('left', style({ transform: "translateX(0)" })),
    transition('right => left', [animate('1s 300ms ease')]),
    transition('left => right', [animate('1s 300ms ease')])
]);