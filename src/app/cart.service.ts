import { Injectable } from '@angular/core';
import { IDishes } from './Idishes';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:IDishes[]=[];
  

  constructor() { }

  getLength(){
    return this.items.length
  }

  addToCart(dish:IDishes){
    this.items.push(dish);
  }



  getItems(){
    return this.items;
  }

  clearCart(){
    this.items=[];
    return this.items;
  }

}
