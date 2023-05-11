import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
@Component({
    selector: 'app-content',
    template: `
    <h1>Main Content Component</h1>
    <h1 *ngIf="product; else elseBlock">{{product}}</h1>
    <ng-template #elseBlock>
    <h1 > No product available</h1>
    </ng-template>

    <hr>
    <h1>Courses</h1>
    <ul>
        <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    
    



    <hr>
    <h1>Switch case</h1>
    <div [ngSwitch]="choice">
        <h3 *ngSwitchCase="'aws'">Amazon web service</h3>
        <h3 *ngSwitchCase="'azure'">Microsoft Azure Cloud</h3>
        <h3 *ngSwitchCase="'google'">Google Cloud service</h3>
    </div>

    `,
    styles:
    [`
        h1{
            color: red;
        }
        `
    ]    
}) 

export class ContentComponent implements OnInit{
    public product:unknown="";
    public showComponent:boolean = false;
    public choice="azure";
    public courses:string[]=["Java", "Angular", "PHP", "Python", "Laravel"];
    ngOnInit() {
        console.log("App-Content Component loaded");
        this.product = this.productService.getProduct();
      }
    hello(){

    console.log("Welcome");
    }
    public constructor(private productService:ProductService){

    }




    
}