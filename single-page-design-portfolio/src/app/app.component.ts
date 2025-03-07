import { Component} from '@angular/core';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { GridCardComponent } from "./grid-card/grid-card.component";
import { ResumeCardComponent } from "./resume-card/resume-card.component";
import { ImageCarouselComponent } from "./image-carousel/image-carousel.component";
import { ConsultationBtnComponent } from "./consultation-btn/consultation-btn.component";
import { topics, carouselImages } from './data';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderFooterComponent, GridCardComponent, ResumeCardComponent, ImageCarouselComponent, ConsultationBtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'single-page-design-portfolio';
  genres = topics;
  images = carouselImages;
}
