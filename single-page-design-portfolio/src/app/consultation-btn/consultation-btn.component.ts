import { Component, input } from '@angular/core';

@Component({
  selector: 'app-consultation-btn',
  standalone: true,
  imports: [],
  templateUrl: './consultation-btn.component.html',
  styleUrl: './consultation-btn.component.css'
})
export class ConsultationBtnComponent {
buttonColor = input<string>('#030303');
hoverColor = input<string>('#755cde')
isHovered = false;
}
