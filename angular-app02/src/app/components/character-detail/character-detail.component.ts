import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // read routes
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  public character: any = {};

  // read routes
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // load params data with response
    this.route.params.subscribe(
      params => {
        const urlDetail = `/${params.id}`;

        // load character detail data with response
        this.api.getCharacterDetail(urlDetail).subscribe(
          data => this.character = data,
          error => alert(error)
        );
      },
      error => alert(error)
    );
  }
}
