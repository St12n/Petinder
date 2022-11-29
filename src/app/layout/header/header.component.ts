import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  private _title: string;
  constructor() {
    this._title = 'ElitePets'
  }

  get title(): string {
    return this._title;
  }

}
