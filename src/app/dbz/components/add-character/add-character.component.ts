import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: [],
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character ={
    id: uuid(),
    name: '',
    power: 0
  }

  emitCharacter():void{

    //debugger;

    //Si no tiene nombre no es aceptado
    if( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character = { id:'',name:'', power:0} ;


  }

 }
