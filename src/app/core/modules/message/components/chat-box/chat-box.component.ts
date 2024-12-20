import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArrowLeft, LucideAngularModule, Phone, SendHorizontal, Video } from 'lucide-angular';
import { AvatarComponent } from "../../../../UI/avatar/avatar.component";
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScrollToEndDirective } from '../../../../directives/scroll-to-end.directive';

@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, AvatarComponent, FormsModule, ReactiveFormsModule, ScrollToEndDirective],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatBoxComponent {
  public readonly arrowLeft = ArrowLeft;
  public readonly videoIcon = Video;
  public readonly callIcon = Phone;
  public readonly sendIcon = SendHorizontal;

  private readonly fb = inject(FormBuilder);

  public messageForm = this.fb.group({
    message: ['', [Validators.required]]
  });

  get message() {
    return this.messageForm.get('message');
  }

  sendMessage() {
    const message = this.message?.value;
  }

  public test = Array.from({ length: 50 }).map(() => Math.ceil(Math.random() * 50));
}
