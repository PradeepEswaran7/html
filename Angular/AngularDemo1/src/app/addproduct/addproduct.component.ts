import { Component } from '@angular/core';
import { products } from '../models/product.model';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  isSubmitted:boolean = false
  product:products ={
    pname:'',
    pdesc:'',
    price:0,
    inStock:false
  }

  constructor(private productservice:ProductserviceService){

  }

  saveProduct(){
    const pdata = {
      pname:this.product.pname,
      pdesc:this.product.pdesc,
      price:this.product.price,
      inStock:this.product.inStock
    }
    this.productservice.create(pdata).subscribe({
      next:(res)=>{
        console.log(res)
        this.isSubmitted=true
      },
      error: (err)=>console.error(err)
    })   
  }

  newProduct(){
    this.isSubmitted = false;
    this.product = {
      pname:'',
      pdesc:'',
      price:0,
      inStock:false
    }
  }
}
