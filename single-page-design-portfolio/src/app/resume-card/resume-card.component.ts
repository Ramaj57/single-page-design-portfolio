import { Component } from '@angular/core';
import { ConsultationBtnComponent } from "../consultation-btn/consultation-btn.component";

@Component({
  selector: 'app-resume-card',
  standalone: true,
  imports: [ConsultationBtnComponent],
  templateUrl: './resume-card.component.html',
  styleUrl: './resume-card.component.css'
})
export class ResumeCardComponent {

}
