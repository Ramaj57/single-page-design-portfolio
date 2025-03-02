import { Component } from '@angular/core';
import { ConsultationBtnComponent } from "../consultation-btn/consultation-btn.component";

@Component({
  selector: 'app-header-footer',
  standalone: true,
  imports: [ConsultationBtnComponent],
  templateUrl: './header-footer.component.html',
  styleUrl: './header-footer.component.css'
})
export class HeaderFooterComponent {

}
