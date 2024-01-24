import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Hulk', 'Thor', 'She Hulk']
  public deleteHero?: string;

  removeLastHero():void {
    this.deleteHero= this.heroNames.pop();
  }

}
