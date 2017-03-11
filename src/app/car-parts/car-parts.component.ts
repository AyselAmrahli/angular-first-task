import { Component } from '@angular/core';
import {CarPart} from './car-parts';
import {CARPARTS} from './mocks';

@Component({
  selector: 'app-car-parts',
  templateUrl:'./car-parts.component.html',
  styleUrls:['./car-parts.component.css']
})
export class CarPartsComponent {
carParts:CarPart[];
  ngOnInit(){
  	this.carParts = CARPARTS;

  }

  totalParts(){
  	// let sum = 0;
  	// for(let carPart of this.carParts){
  	// 	sum+=carPart.inStock;
  	// }
  	// return sum;

  	return this.carParts.reduce((prev, current) =>  prev + current.inStock, 0 );
  }
  upQuantity(carPart){
    if(carPart.quantity<carPart.inStock)  carPart.quantity++;  
  }
 downQuantity(carPart){
    if(carPart.quantity>0)   carPart.quantity--;
  }
}
