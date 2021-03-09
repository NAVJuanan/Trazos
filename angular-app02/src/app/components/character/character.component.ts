import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  public characterList: any[] = [];

  // call to service
  constructor(private api: ApiService) { }

  public showCharacter(characterName: string): void {
    alert(characterName);
  }

  ngOnInit(): void {

    // load list with response
    this.api.getCharacters().subscribe(
      data => this.characterList = data.results,
      error => alert(error)
    );

    for (let p of this.characterList) {
      console.log(p);
    }

  }
}
