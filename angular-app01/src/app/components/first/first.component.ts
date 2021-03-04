import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // font-awesome

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  // font-awesome
  faCoffee = faCoffee;

  // propiedades
  public title: string = 'first';
  public name: string = "Juanan";
  public web: string = "www.google.es";
  public inputValue: string = "";
  public counter: number = 0;
  public listValues: string[] = [];

  constructor() { }

  // métodos
  public sumar(): void {
    this.counter++;
  }

  public restar(): void {
    this.counter--;
  }

  public printItem(item: string): string {
    return item.toUpperCase();
  }

  public addWord(): void {
    this.listValues.push(this.inputValue);
    this.inputValue = "";
  }

  ngOnInit(): void {
    this.listValues.push("dando");
    this.listValues.push("una");
    this.listValues.push("vuelta");
    this.listValues.push("por");
    this.listValues.push("Angular");
  }
}
