import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Application';
  username:string = "USERNAME";
  message:string = 'welcome';
  
  changeUsername(value:string):void {
    this.username=value;
  }

  handleChildEvent($event:string){
    this.message=$event;
  }
  changeEvent($event:Event){
    this.username= ($event.target as HTMLTextAreaElement).value;
  }



  
}
