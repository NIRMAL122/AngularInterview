import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularInterview';
  isDisabled=true;

  EventBinding(a:number,b:number){
    console.log("Event Binding Testing");
    console.log(a+b);
  }

  name="";

  students=["Ben Stokes", "Jos Buttler","Steve Smith"]

  bgColor='black'
  color='white'

  className= "bwClass"

  str="Nirmal Singh"

  dob="12/08/1997"
}
