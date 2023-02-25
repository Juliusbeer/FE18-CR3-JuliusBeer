import { Component,OnInit } from '@angular/core';
import { dishes } from '../dishes';
import { IDishes } from '../Idishes';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes:IDishes[]=dishes;

  constructor(private cartService:CartService){}


dish:IDishes={} as IDishes;
id:number=0;


  addToBasked(id:number){
    this.id=id;
    window.alert("Your dish has been added to your cart");
    this.cartService.addToCart(dishes[this.id]);
  }
ngOnInit(): void {
  
}
}
