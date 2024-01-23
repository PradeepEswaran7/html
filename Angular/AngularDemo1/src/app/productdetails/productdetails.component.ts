import { Component,Input,OnInit } from '@angular/core';
import { products } from '../models/product.model';
import { ProductserviceService } from '../productservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  // @Input() viewMode = false

  sproduct: products={
    pname:'',
    pdesc:'',
    price:0,
    inStock:false
  }
  
  flag :string = ""
  ngOnInit(){
     this.getProductDetails(this.activateroute.snapshot.params["x"])
    }

    deleteproduct(){
      this.productservice.delete(this.sproduct.id).subscribe({
        next:(res)=>{
          alert("product deleted")
          this.route.navigate(["/products"]) 
        }
      })
    }

saveProduct()
{ 
  
  this.productservice.update(this.sproduct.id,this.sproduct).subscribe({
    next:(res)=>{
      
      this.route.navigate(["/products"])
    }
  })
  
}

setFlag(f:string){
  this.flag = "U"
}

  getProductDetails(id:any){
    this.productservice.get(id).subscribe({
      next:(data)=>{
        this.sproduct = data
        console.log(data)
        
      },
      error:(e)=>console.error(e)
    })
  }

  constructor(private productservice:ProductserviceService,
    private activateroute:ActivatedRoute,
    private route:Router){}


}
