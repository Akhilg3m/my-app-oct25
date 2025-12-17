import { AbstractControl } from "@angular/forms";

export function capgeminiEmail(control:AbstractControl){
  if(control.value.includes('@capgemini.com')){
    return null;
  }
  else{
    return {'capgeminiEmail':true}
  }
}


export function positiveNumber(control:AbstractControl){
  if(control.value > 0){
    return null;
  }
  else{
    return {'positiveNumber':true}
  }
}
