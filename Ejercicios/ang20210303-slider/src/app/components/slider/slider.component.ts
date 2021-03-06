import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // font-awesome
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // font-awesome

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  // font-awesome
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  private imageList: string[] = []; // list of images
  public currentImage: string = "";
  private currentIndex: number = 0;
  private intervalTime: number = 6000;
  private setRightClick: any;

  constructor() { }

  public moveLeft(): void {
    this.currentIndex--;
    this.checkIndex();
    this.loadImage();
  }

  public moveRight(): void {
    this.currentIndex++;
    this.checkIndex();
    this.loadImage();
  }

  private checkIndex(): void {
    if (this.currentIndex >= this.imageList.length) {
      this.currentIndex = 0;
    }

    if (this.currentIndex < 0) {
      this.currentIndex = this.imageList.length - 1;
    }
  }

  // show image
  private loadImage(): void {
    this.currentImage = this.imageList[this.currentIndex];
    this.manageInterval();
  }

  // manage interval
  private manageInterval(): void {
    if (this.setRightClick) {
      clearInterval(this.setRightClick);
    }

    this.setRightClick = setInterval(() => this.moveRight(), this.intervalTime);
  }

  // load initial images
  ngOnInit(): void {
    this.imageList.push("../../../assets/img/thumb-1920-1047038.jpg");
    this.imageList.push("../../../assets/img/thumb-1920-1074249.jpg");
    this.imageList.push("../../../assets/img/thumb-1920-1077528.jpg");
    this.imageList.push("../../../assets/img/thumb-1920-1077740.jpg");

    this.currentIndex = 0;
    this.loadImage();
    this.manageInterval();
  }
}
