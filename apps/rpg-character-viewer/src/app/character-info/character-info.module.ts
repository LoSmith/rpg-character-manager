import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@viewer-app/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@viewer-app/material.module';
import { CharacterInfoComponent } from './character-info.component';
import { CharacterInfoRoutingRoutingModule } from '@viewer-app/character-info/character-info-routing.module';
import { CharacterInfoSkillsComponent } from './character-info-skills/character-info-skills.component';
import { CharacterInfoAttributesComponent } from './character-info-attributes/character-info-attributes.component';
import { CharacterInfoBasicsComponent } from './character-info-basics/character-info-basics.component';
import { FormsModule } from '@angular/forms';
import { CharacterInfoBodystatsComponent } from './character-info-bodystats/character-info-bodystats.component';
import { CharacterInfoItemsComponent } from './character-info-items/character-info-items.component';
import { SharedModule } from '@viewer-app/shared';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CharacterInfoCardComponent } from './character-info-card/character-info-card.component';
import { DiceRollModalComponent } from '@viewer-app/dice-roll-modal/dice-roll-modal.component';

@NgModule({
  declarations: [
    CharacterInfoComponent,
    CharacterInfoSkillsComponent,
    CharacterInfoAttributesComponent,
    CharacterInfoBasicsComponent,
    CharacterInfoBodystatsComponent,
    CharacterInfoItemsComponent,
    CharacterInfoCardComponent,
    DiceRollModalComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    FlexLayoutModule,
    MaterialModule,
    CharacterInfoRoutingRoutingModule,
    FormsModule,
    SharedModule,
    DragDropModule,
  ],
})
export class CharacterInfoModule {}
