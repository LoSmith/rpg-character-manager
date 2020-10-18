import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoriolisCharacter } from '@viewer-app/shared';

@Component({
  selector: 'viewer-character-info-card',
  templateUrl: './character-info-card.component.html',
  styleUrls: ['./character-info-card.component.scss'],
})
export class CharacterInfoCardComponent implements OnInit {
  @Input() character: CoriolisCharacter;
  areAllOpen = true;

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {}

  onToggleAll() {
    this.areAllOpen = !this.areAllOpen;
  }

  onSaveCharacter() {
    const result = this.character.equipedItems;
    this._snackBar.open(JSON.stringify(result), 'close', {
      duration: 10000,
    });
  }
  characterGainXP(number: number) {
    this.character.background.xp.free += number;
  }

  characterSpendXP(number: number) {
    if (this.character.background.xp.free < number) {
      this._snackBar.open(`Not enough free XP to buy an advance`, 'close', {
        duration: 3000,
      });
    } else {
      this.character.background.xp.free -= number;
      this.character.background.xp.spent += number;
    }
  }
}
