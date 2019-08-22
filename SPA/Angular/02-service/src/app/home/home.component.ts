import { Component, OnInit } from '@angular/core';
import { isBoolean } from 'util';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isBlue:boolean = false;

  constructor(private data:DataService) { }

  ngOnInit() {
  }

  clicked(){
    this.data.clickedFunction()
  }
  
}

