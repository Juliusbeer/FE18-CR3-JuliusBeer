import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { IDishes } from '../Idishes';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items:IDishes[]=[];
  total:number=0;
  service:number=0;
  totaltotal:number=0;
  discount:number=0;

  deliveryForm=this.formbuilder.group({
    name:"",
    address:""
  });

  constructor(private cartService:CartService, private formbuilder:FormBuilder){}

  ngOnInit():void{
    this.items=this.cartService.getItems();
    this.items.forEach(item =>{
      this.total=this.total+item.price;
      this.service=this.total*0.1;
      
      if(this.total>40){
        this.discount=this.total*0.15;
        this.totaltotal=(this.total+this.service)-this.discount;
            }else{
              this.totaltotal=this.total*1.1;
            }
    });
    console.log(this.discount);
    console.log(this.service);

  }
  onSubmit() {
    window.alert('Your order has been submitted');
    this.items = this.cartService.clearCart();
    this.deliveryForm.reset();
    this.totaltotal=0;
    this.service=0;
    this.total=0;
    this.discount=0;
  }
  
}

