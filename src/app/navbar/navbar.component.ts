import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  isNavbarContentOpen: boolean = false;
  currentSection: any;
  profilemenu: any;

  constructor(){}

  ngOnInit(): void {
    
    
  }
  openNavbarContent(section: any) {
    this.isNavbarContentOpen = true;
    this.currentSection = section;
  }

  closeNavbarContent(){
    this.isNavbarContentOpen = false;
  }
  navigateToCart(path:any){
  }
  
 @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const modelContainer = document.querySelector('.modal-container');
    const openButtons = document.querySelectorAll('.open-button');
    let clickInsideButton = false;

    openButtons.forEach((button: Element) => {
      if (button.contains(event.target as Node)) {
        clickInsideButton = true;
      }
    });
    if (modelContainer && !clickInsideButton && this.isNavbarContentOpen){
      this.closeNavbarContent();
    }
  }
}
