import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent {
  public name="Esha Karmacharya";
  public person={
    "fname":"Esha",
    "lname": "Karmacharya"
  };
  public date = new Date();

  public servers=[
    {
      "name":"server1",
      "status": "stable"
    },
    {
      "name":"server2",
      "status": "offline"
    }
  ];
  public filteredStatus:string="";
}
