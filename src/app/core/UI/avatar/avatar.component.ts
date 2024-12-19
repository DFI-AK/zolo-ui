import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent {
  @Input()
  public isProfilePic: boolean = false;

  @Input()
  public isOnline: boolean = false;

  @Input()
  public profilePic: string = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp';

  @Input()
  public text: string = 'A';

  @Input()
  public width: string = 'w-12';
}
