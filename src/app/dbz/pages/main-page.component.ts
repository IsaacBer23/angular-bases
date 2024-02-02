import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'bdz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

 constructor( private dbzService: DbzService) {}

 get characters(): Character[]{
  return [...this.dbzService.characters];
 }

 onDeleteCharacter(id:string):void {
  this.dbzService.deleteCHaracterById(id);
 }

 onNewCharacter( character: Character): void{
  this.dbzService.addCharacter(character);
 }

}
