import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-consultation-btn',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './consultation-btn.component.html',
  styleUrl: './consultation-btn.component.css'
})
export class ConsultationBtnComponent {
buttonColor = input<string>('black');
}
