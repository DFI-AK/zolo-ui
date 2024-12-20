import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArrowLeft, Bell, Bookmark, ChevronRight, Clock, History, LucideAngularModule, SquareActivity } from 'lucide-angular';
import { SearchboxComponent } from "../../../../UI/searchbox/searchbox.component";
import { SearchPipe } from '../../../../pipes/search.pipe';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, SearchboxComponent, SearchPipe],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  public readonly arrowLeftIcon = ArrowLeft;
  public readonly arrowRight = ChevronRight;

  public searchText: string = '';

  public useOfZolo = [
    { label: "Saved", icon: Bookmark, route: 'settings/saved' },
    { label: "Archive", icon: History, route: 'settings/saved' },
    { label: "Your activity", icon: SquareActivity, route: 'settings/saved' },
    { label: "Notifications", icon: Bell, route: 'settings/saved' },
    { label: "Time management", icon: Clock, route: 'settings/saved' },
  ];
}
