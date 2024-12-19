import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule, Search } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbox',
  standalone: true,
  imports: [LucideAngularModule, FormsModule],
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})
export class SearchboxComponent {
  public readonly searchIcon = Search;

  public searchText: string = '';

  @Input()
  public placeholder: string = '';

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchText);
  }
}
