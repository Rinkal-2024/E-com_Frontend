import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navigation } from 'src/assets/Data/navigation';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent implements OnInit{
@Input() 
selectedSection: any;
category: any;

constructor(private router : Router){}


ngOnInit(): void {
  this.category = navigation;
  console.log(this.selectedSection)  
}

handleNavigate = (path:any) =>{
  this.router.navigate([path])
}

}
