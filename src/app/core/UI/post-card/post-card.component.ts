import { Component } from '@angular/core';
import { AvatarComponent } from "../avatar/avatar.component";
import { ButtonComponent } from "../button/button.component";
import { Bookmark, Heart, LucideAngularModule, MessageSquareText, Send } from 'lucide-angular';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [AvatarComponent, ButtonComponent, LucideAngularModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  public readonly likeIcon = Heart;
  public readonly commentIcon = MessageSquareText;
  public readonly bookmarkIcon = Bookmark;
  public readonly shareIcon = Send;
}
