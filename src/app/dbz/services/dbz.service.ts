import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 500
  }, {
    id: uuid(),
    name: 'Goku',
    power: 1500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }
 ];

 addCharacter( character: Character):void {

  const newCharacter: Character = {
    ...character
  };


  this.characters.push(newCharacter);
 }

 /* onDeleteCharacter( index:number){
  this.characters.splice(index, 1);
 } */

 deleteCHaracterById( id:string ){
  this.characters = this.characters.filter( character => character.id !== id);
 }

}
