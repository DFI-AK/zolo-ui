import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNavbarComponent } from "./core/UI/bottom-navbar/bottom-navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BottomNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zolo';
}
