import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  currentUrl = ""
  constructor(private router: Router){
    router.events.subscribe((val)=>{
      if(val instanceof NavigationStart){
        this.currentUrl = val.url
      }
    })
  }
  
  createBudgetSheet(){
    this.router.navigate(['/create-sheet']);
  }

  sheetListNavigate(){
    this.router.navigate(['/']);
  }
}
