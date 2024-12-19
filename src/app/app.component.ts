import { Component, inject } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { routeAnimations } from './core/animations/routeAnimation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [routeAnimations]
})
export class AppComponent {
  title = 'zolo';
  private context = inject(ChildrenOutletContexts);

  getRouterAnimation = () => this.context.getContext('primary')?.route?.snapshot.data['animation'];
}
