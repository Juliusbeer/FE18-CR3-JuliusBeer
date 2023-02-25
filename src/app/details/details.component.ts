import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { CartService } from '../cart.service';
import { dishes } from '../dishes';
import { IDishes } from '../Idishes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  dish:IDishes={} as IDishes;
  id:number=0;
constructor(private route: ActivatedRoute, private cartService: CartService){}

addToBasked(){
  window.alert("Your dish has been added to your cart");
  this.cartService.addToCart(this.dish);
}

ngOnInit():void{
  this.route.params.subscribe((params: Params) => {
    this.id = +params['id'];
    this.dish = dishes[this.id];
  });

}
}

