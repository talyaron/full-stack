import { Injectable } from '@angular/core';

@Injectable({ //injectible decorator
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  clickedFunction(){
    return console.log('clicked using service')
  }
}



