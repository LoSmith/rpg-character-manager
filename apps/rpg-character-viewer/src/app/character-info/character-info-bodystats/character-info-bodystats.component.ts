import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@viewer-app/shared/character/character';
import { BodyStatType, getFormulaExplanation } from '@viewer-app/shared/character/characterBodyStat';

@Component({
  selector: 'app-character-info-bodystats',
  templateUrl: './character-info-bodystats.component.html',
  styleUrls: ['./character-info-bodystats.component.scss'],
})
export class CharacterInfoBodystatsComponent implements OnInit {
  @Input() character: Character;
  private getBodyStatExplanation: (bodyStatType: BodyStatType) => string;

  constructor() {
    this.getBodyStatExplanation = getFormulaExplanation;
  }

  ngOnInit() {}
}
