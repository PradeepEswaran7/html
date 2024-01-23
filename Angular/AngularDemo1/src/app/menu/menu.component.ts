import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
bmenu:string[] = ["Idli","Dosa","Poori","Chole"]
lmenu:string[] = ["Veg-Meals","Non-Veg Meals","Veg Biryani Combo", "Chicken Biryani Combo","Fasting Combo"]
menu:string[] = [] 
menutype:string =""
pricelistb:number[] =[80.00,120.00,60.00,50.00]
pricelistl:number[] =[125.00,150.00,200.00,250.00]
selectedMenuItem:string = ""
applyClasstoMenu:string = "breakfast"
priceCSS:Object={}
nomenuprice = "If No Price , it is free"

setMenu(ftype:string){
  
  if (ftype=="B"){
    this.menu = this.bmenu
    this.applyClasstoMenu = "breakfast"
    this.menutype = ftype
  
  }
  else if(ftype=="L")
  {
    this.menu = this.lmenu
    this.applyClasstoMenu = "lunch"
    this.menutype = ftype
  }
}
constructor(){
  this.menu = this.bmenu
  this.setPriceCSS()
}

selectMenuItem(item:string){
  this.selectedMenuItem = item
 // console.log(item)
}

setPriceCSS(){
  this.priceCSS ={
    'background-color':'blue',
    'font-weight':'bold',
    'color' : 'white'
  }
}

}
