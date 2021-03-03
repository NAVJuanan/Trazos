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
  public listValues: string[] = [];

  // métodos
  public sumar() {
    this.counter++;
  }

  public restar() {
    this.counter--;
  }

  constructor() { }

  ngOnInit(): void {
    this.listValues.push("dando");
    this.listValues.push("una");
    this.listValues.push("vuelta");
    this.listValues.push("por");
    this.listValues.push("Angular");
  }
}
