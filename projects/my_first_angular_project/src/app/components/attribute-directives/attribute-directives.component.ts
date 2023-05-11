import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent {
public className="btn btn-danger text-white";
public classes=["btn", "btn-success", "text-warning"];
public classObjects = 
  {
    "btn":true,
    "btn-primary":true,
    "text-white":true,
    "bg-dark": false
  };
 
}
