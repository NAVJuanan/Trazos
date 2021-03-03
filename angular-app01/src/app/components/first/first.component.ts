import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  // propiedades
  public title: string = 'first';
  public name: string = "Juanan";
  public web: string = "www.google.es";
  public counter: number = 0;

  // métodos
  public sumar() {
    this.counter++;
  }

  public restar() {
    this.counter--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
