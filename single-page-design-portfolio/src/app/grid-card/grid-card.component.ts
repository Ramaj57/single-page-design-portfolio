import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-grid-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './grid-card.component.html',
  styleUrl: './grid-card.component.css'
})
export class GridCardComponent {
name = input<string>('');
image = input<string>('');
gridColor = input<string>('');
}
