import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title1: string = "careers at Pixar";
  title2: string = "Soul trailers";
  title3: string = "inclusion and outreach";

  constructor() { }

  ngOnInit(): void {
  }

}
