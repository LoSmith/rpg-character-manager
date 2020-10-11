import { Character } from '@viewer-app/shared/coriolis/character/character';
import { Dice } from '@viewer-app/shared/dice/dice';
import { CoriolisRoll } from '@viewer-app/shared/coriolis/coriolisRoll';
import { attributesMock, itemWeaponMockMelee, skillsMock } from '@viewer-app/shared/coriolis/characterMock';
import { AttributeType } from '@viewer-app/shared';

describe('CoriolisRoll', () => {
  let characterBaseMock: Character;

  describe('Constructor', () => {
    it('creates a Character Class with no information', () => {
      characterBaseMock = new Character();
      expect(characterBaseMock).toBeTruthy();
    });
  });

  describe('rollInitiative', () => {
    beforeEach(() => {
      characterBaseMock = new Character({
        attributes: attributesMock,
        skills: skillsMock,
        equipedItems: [],
        specialDices: []
      });
    });

    it('should roll 1 dice for initiative', () => {
      const result: Dice[] = CoriolisRoll.rollInitative(characterBaseMock, 0);
      expect(result).toBeTruthy();
      expect(result.length).toEqual(1);
    });

    it('should roll 1 dice with a bonus of 10 to be above at least 11 as a result', () => {
      const result: Dice[] = CoriolisRoll.rollInitative(characterBaseMock, 10);
      expect(result.length).toEqual(1);
      expect(result[0].diceResult).toBeGreaterThanOrEqual(11);
    });

    it('should roll 1 dice with a bonus of 10 from a equiped weapon to be above at least 11 as a result', () => {
      const tmpCharacterMock = new Character(characterBaseMock);
      tmpCharacterMock.equipedItems = [itemWeaponMockMelee];
      const result: Dice[] = CoriolisRoll.rollInitative(tmpCharacterMock);
      expect(result.length).toEqual(1);
      expect(result[0].diceResult).toBeGreaterThanOrEqual(11);
    });
  });

  describe('rollAttribute', function() {
    beforeEach(function() {
      characterBaseMock = new Character({
        attributes: attributesMock,
        skills: skillsMock,
        equipedItems: [],
        specialDices: []
      });
    });

    it('rolls strength with the expected number of dice', function() {
      const result: Dice[] = CoriolisRoll.rollAttribute(AttributeType.Strength, characterBaseMock);
      expect(result.length).toBe(1);
    });

    it('rolls strength with the expected number of dice and the modifier is applied', function() {
      const result: Dice[] = CoriolisRoll.rollAttribute(AttributeType.Strength, characterBaseMock, 10);
      expect(result.length).toBe(11);
    });
  });
});