import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, PatternValidator, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent {
  myFormModel=new FormGroup({
    city:new FormControl('', [Validators.required, 
                              Validators.minLength(3), 
                              Validators.maxLength(12),
                              Validators.pattern('[a-zA-Z]*')  
                            ]),
    cityCode: new FormControl('', [Validators.required, Validators.min(11), Validators.max(100)])
  },
  // {
  //   updateOn: "submit"
  // }
  );
  productForm:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder){
    this.createForm();
  }
  createForm(){
    this.productForm=this.fb.group({
      name:[null, Validators.required],
      description:[null],
      price:this.fb.group({
        mrp:[null],
        discount:[null]
      })
    });
  }

  submitted(){
    console.log(this.productForm.value);
  }
 
 
 
  citySubmit(){
   // console.log(this.myFormModel.get('city'));
   // console.log(this.myFormModel.get('cityCode'));
   console.log(this.myFormModel.value);
  }

  ignoreError(){
    console.log(this.myFormModel.get('city'));
    //this.myFormModel.get('city').removeValidators(Validators.pattern("^[a-zA-Z]*$"));
    this.myFormModel.clearValidators();
    this.myFormModel.updateValueAndValidity();
    //console.log(this.myFormModel.get('city'));
  }
}
