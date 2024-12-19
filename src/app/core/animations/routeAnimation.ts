import { trigger, transition, style, query, group, animate } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%', height: "100%" }), { optional: true }),
        group([
            query(':leave', [animate('300ms ease', style({ transform: 'translateX(-100%)' }))], { optional: true }),
            query(':enter', [animate('300ms ease', style({ transform: 'translateX(0)' }))], { optional: true })
        ])
    ])
]);
