import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [NgClass],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css',
})
export class ImageCarouselComponent {
  currentIndex = 0;
  images = input<{ src: string; alt: string }[]>([]);
  prevIsHovered = false;
  nextIsHovered = false;

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
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        carouselWrapper.style.transform = `translateX(-${
          this.currentIndex * 89
        }%)`;
      } else if (screenWidth < 1440) {
        carouselWrapper.style.transform = `translateX(-${
          this.currentIndex * 47.5
        }%)`;
      } else {
        carouselWrapper.style.transform = `translateX(-${
          this.currentIndex * 15
        }%)`;
      }
    }
  }
}
