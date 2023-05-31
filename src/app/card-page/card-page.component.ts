import { Component, OnInit } from '@angular/core';

import { Character } from '../model/character';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent implements OnInit{

  characters: Character[]=[];

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    ConnectionService.getAllCharacterWithObservable()
  }
}
