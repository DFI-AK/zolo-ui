import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Heart, LucideAngularModule, MessageCircle } from 'lucide-angular';
import { BottomNavbarComponent } from '../../core/UI/bottom-navbar/bottom-navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, BottomNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public readonly likeIcon = Heart;
  public readonly messageIcon = MessageCircle;
}
