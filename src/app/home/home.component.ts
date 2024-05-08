import { Component, OnInit } from '@angular/core';
import { menJewellery } from 'src/assets/Data/Men/menJewellery';
import {womenJewellery} from 'src/assets/Data/womenJewellery/womenJewellery'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menJewellery:any = [];
  womenJewellery :any =[];


  ngOnInit() {
    this.menJewellery = menJewellery.slice(1,9);
    this.womenJewellery = womenJewellery.slice(1,9)
  
  }

}
