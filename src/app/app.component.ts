import { Component } from '@angular/core';
import { LoggingService } from './Services/logging.service';
import {Observable} from 'rxjs';
import { StudentService } from './Services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoggingService]
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

  //Promise
  isPromis= new Promise<string>((resolve,reject)=>{
    console.log("Promise Start");
  })

  //observable
  myObservable= new Observable(observer=>{
    console.log("Observable Start");
    observer.next("a");
    observer.next("b");
    observer.next("c");
  })

  public studentsJSON:any[]=[];

  constructor(private _logging:LoggingService,
              private _studentService: StudentService){
    _logging.logError();
  }

  ngOnInit():void
  {
    //observable subscription
    this.myObservable.subscribe((val=>{
      console.log(val);
    }));

    this._studentService.getStudents().subscribe(
      data=>this.studentsJSON=data
    )
  }

}
