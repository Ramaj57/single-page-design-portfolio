import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css',
})
export class ImageCarouselComponent {
  currentIndex = 0;
  images = input<{ src: string; alt: string }[]>([]);

  toPrevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images().length) % this.images().length;
    this.updateCarouselPosition();
  }

  toNextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images().length;
    this.updateCarouselPosition();
  }

  updateCarouselPosition(): void {
    const carouselWrapper = document.querySelector(
      '.carousel-wrapper'
    ) as HTMLElement;
    if (carouselWrapper) {
        carouselWrapper.style.transform = `translateX(-${
          this.currentIndex * 22.5
        }rem)`;
      }
    }
  }
