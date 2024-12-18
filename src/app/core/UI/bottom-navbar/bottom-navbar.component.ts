import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CirclePlus, CircleUser, House, LucideAngularModule, Search, SquarePlay } from 'lucide-angular';

@Component({
  selector: 'app-bottom-navbar',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './bottom-navbar.component.html',
  styleUrl: './bottom-navbar.component.css'
})
export class BottomNavbarComponent {
  public readonly houseIcon = House;
  public readonly searchIcon = Search;
  public readonly circlePlusIcon = CirclePlus;
  public readonly squarePlayIcon = SquarePlay;
  public readonly userIcon = CircleUser;

}
