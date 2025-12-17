import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { capgeminiEmail, positiveNumber } from '../custom-validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup = new FormGroup({

    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(/^[a-zA-Z]*$/)]),
    age: new FormControl("", [Validators.required, Validators.min(0), Validators.max(100)]),
    email: new FormControl("", [Validators.required, Validators.email, capgeminiEmail]),
    password: new FormControl("",[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    marks: new FormControl("", [Validators.required, positiveNumber]),
    address: new FormGroup({
      city: new FormControl("", [Validators.required, Validators.minLength(3)]),
      pin: new FormControl("", [Validators.required, Validators.min(100000), Validators.max(999999)])
    }),
    cards: new FormArray([]),
    type: new FormControl(),
    // busFee: new FormControl(),
    // hostelFee: new FormControl()
  });

  constructor(){
    this.userForm.get("type")?.valueChanges.subscribe(
      (data:any)=>{

        if(data==='dayScholor'){
          this.userForm.addControl('busFee', new FormControl("", [Validators.required, Validators.min(100)]));
          this.userForm.removeControl('hostelFee');
        }
        else{
          this.userForm.addControl('hostelFee', new FormControl());
          this.userForm.removeControl('busFee');
        }

      }
    )
  }

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl(),
        expiry: new FormControl(),
        cvv: new FormControl("", [Validators.required, Validators.min(100), Validators.max(999)])
      })
    )
  }

  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }

  submit(){
    console.log(this.userForm);
  }

}




