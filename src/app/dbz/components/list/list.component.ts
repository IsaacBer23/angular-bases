import { Component, Input, Output, EventEmitter } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: []
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string>  = new EventEmitter();

  onDeleteCHaracter(id:string):void{
    // TODO: EMitir el ID del personaje
    console.log({id});
    this.onDelete.emit(id);
  }



 }
