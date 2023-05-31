import { Component, Input } from '@angular/core';

import { BaseData } from '../model/basedata';
import { Character, Result } from '../model/character';
import { Episode } from '../model/episode';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() character?:Result
  @Input() location?:Location
}
