import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Heart, LucideAngularModule, MessageCircle } from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public readonly likeIcon = Heart;
  public readonly messageIcon = MessageCircle;
}
