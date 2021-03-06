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

  // list of images
  imageList: string[] = [];

  constructor() { }

  moveLeft(): void {

  }

  moveRight(): void {

  }

  // load initial images
  ngOnInit(): void {
    this.imageList.push("../../../assets/img/thumb-1920-1047038.jpg");
    this.imageList.push("../../../assets/img/thumb-1920-1074249.jpg");
    this.imageList.push("../../../assets/img/thumb-1920-1077528.jpg");
    this.imageList.push("../../../assets/img/thumb-1920-1077740.jpg");
  }

}
