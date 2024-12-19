import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ArrowLeft, LayoutGrid, LucideAngularModule, Menu, SquarePlay, SquareUserRound } from 'lucide-angular';
import { BottomNavbarComponent } from "../bottom-navbar/bottom-navbar.component";
import { AvatarComponent } from "../avatar/avatar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, BottomNavbarComponent, AvatarComponent, CommonModule, RouterOutlet, RouterLinkActive],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: param => {
        const { tab } = param;
        this.activeTab = tab;
      }
    });
  }

  public readonly arrowLeftIcon = ArrowLeft;
  public readonly menuIcon = Menu;
  public readonly tilesIcon = LayoutGrid;
  public readonly videoIcon = SquarePlay;
  public readonly userTagIcon = SquareUserRound;

  public activeTab: string = '';

  private readonly activatedRoute = inject(ActivatedRoute);

}
