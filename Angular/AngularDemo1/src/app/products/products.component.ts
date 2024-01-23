import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { products } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
productslist:products[];
product_name = ""
selectedproduct:products={}
currentIndex:number

  constructor(private productservice:ProductserviceService){

}

setCurrentProduct(p:products,index:number){
  this.selectedproduct = p
  this.currentIndex = index
  console.log(this.selectedproduct)
}

ngOnInit(){
  this.extractProductData()
}

extractProductData(){
  this.productservice.getAll().subscribe({
    next:(data)=>{
      this.productslist=data
      console.log(data)
    },
    error:(e)=>console.error(e)
  }
 )
}


}
