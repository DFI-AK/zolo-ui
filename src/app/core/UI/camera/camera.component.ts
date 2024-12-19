import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Camera, LucideAngularModule } from 'lucide-angular';
import { WebcamModule } from 'ngx-webcam';

@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.css'
})
export class CameraComponent {
  public readonly cameraIcon = Camera;

}
