import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,DoCheck{

  number:number=0;

  constructor(private cartService:CartService){}
  ngDoCheck(): void {
    this.number=this.cartService.getLength();
  }
ngOnInit(): void {
  
}
}
