import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input()
  public text: string = '';

  @Input()
  className: Record<string, boolean> = {};

  @Output()
  clicked = new EventEmitter<void>();

  onclick() {
    this.clicked.emit();
  }
}
