import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], 
  animations:[

  ]
 
})
export class HeaderComponent {
  @Input('header_title')
  public title:string="Header";
  @Input('header_slogan')
  public slogan:string="slogan";

  @Output() 
  public childEvent= new EventEmitter();

  public emitEvent():void {
    this.childEvent.emit("Welcome to my Angular Application!");
  }

}
