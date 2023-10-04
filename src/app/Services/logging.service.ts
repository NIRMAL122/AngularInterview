import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() {
  }

  logError(){
    console.log("Service Error");
  }
}
