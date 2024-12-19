import { Component } from '@angular/core';
import { BottomNavbarComponent } from "../bottom-navbar/bottom-navbar.component";
import { ArrowLeft, LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [BottomNavbarComponent, LucideAngularModule, RouterLink],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  public readonly arrowLeft = ArrowLeft;
}
