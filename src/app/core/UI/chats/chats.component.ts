import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Archive, ArrowLeft, Drill, List, LucideAngularModule, SquarePlus, Trash2 } from 'lucide-angular';
import { AvatarComponent } from "../avatar/avatar.component";
import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from "../camera/camera.component";
import { CommonModule } from '@angular/common';
import { SearchboxComponent } from "../searchbox/searchbox.component";
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, AvatarComponent, WebcamModule, CameraComponent, CommonModule, SearchboxComponent, SearchPipe],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css'
})
export class ChatsComponent {
  public readonly arrowLeftIcon = ArrowLeft;
  public readonly listIcon = List;
  public readonly drillIcon = Drill;
  public readonly trashIcon = Trash2;
  public readonly archieveIcon = Archive;
  public readonly newChatIcon = SquarePlus;

  public toggleSelectChats: boolean = false;

  public searchText: string = '';

  items = [
    { fullName: "Ayush", online: true, isProfilePic: true, uid: "1" },
    { fullName: "Abhishek Verma", online: true, isProfilePic: false, uid: "2" },
    { fullName: "Anas Saifi", online: false, isProfilePic: false, uid: "3" },
    { fullName: "Lakshman", online: true, isProfilePic: false, uid: "4" },
    { fullName: "Dhirendar", online: false, isProfilePic: true, uid: "5" },
    { fullName: "Aman singh", online: true, isProfilePic: false, uid: "6" }
  ];

}
