import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  item1: string = "privacy policy";
  item2: string = "terms of use";
  item3: string = "your California privacy rights";
  item4: string = "children's online privacy policy";
  item5: string = "interest-based ads";
  item6: string = "do not sell my info";
  copyright: string = "© 1986-2020 Disney / Pixar";

  constructor() { }

  ngOnInit(): void {
  }

}
