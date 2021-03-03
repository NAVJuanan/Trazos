import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  item1: string = "feature films";
  item2: string = "short films";
  item3: string = "technology";
  item4: string = "careers";
  item5: string = "extras";
  item6: string = "about";

  constructor() { }

  ngOnInit(): void {
  }

}
