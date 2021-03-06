import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IPerson } from 'src/app/models/person.model'; // interface

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  public characterList: any[] = [];
  public urlNext: string = "";
  public urlPrevious: string = "";

  // interface developed
  public person: IPerson = {
    firstName: "",
    lastName: "",
    age: 0,
    friends: []
  };


  // call to service
  constructor(private api: ApiService) { }

  public showCharacter(characterName: string): void {
    alert(characterName);
  }

  ngOnInit(): void {

    // load list with response
    this.api.getInitialCharacters().subscribe(
      data => {
        this.characterList = data.results;
        this.urlPrevious = data.info.prev;
        this.urlNext = data.info.next;
      },
      error => alert(error)
    );

    this.person = {
      firstName: "hola",
      lastName: "adios",
      age: 20,
      friends: [
        {
          firstName: "nombre",
          lastName: "apellido",
          age: 18,
          friends: []
        },
        {
          firstName: "nombre 2",
          lastName: "apellido 2",
          age: 23
        }
      ]
    }

    console.log(this.person);
  }

  public previousList(): void {
    this.api.getCharacters(this.urlPrevious).subscribe(
      data => {
        this.characterList = data.results;
        this.urlPrevious = data.info.prev;
        this.urlNext = data.info.next;
      },
      error => alert(error)
    );
  }

  public nextList(): void {
    this.api.getCharacters(this.urlNext).subscribe(
      data => {
        this.characterList = data.results;
        this.urlPrevious = data.info.prev;
        this.urlNext = data.info.next;
      },
      error => alert(error)
    );
  }
}
