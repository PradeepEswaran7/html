import { Directive, HostListener,ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  menutype:string =""
  
  @Input()
  bgColor:string = ""

  @Input()
  textColor:string = ""
  
  constructor(private elementref:ElementRef) { }
  @HostListener('mouseenter')
  onMouseEnter(){
    this.elementref.nativeElement.style.fontWeight='bold'
    this.elementref.nativeElement.style.color = this.textColor
    this.elementref.nativeElement.style.backgroundColor=this.bgColor
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.elementref.nativeElement.style.fontWeight='normal'
    this.elementref.nativeElement.style.color = 'darkkhaki'
    this.elementref.nativeElement.style.backgroundColor='chocolate'
  // if (this.menutype == "B"){
  //   this.elementref.nativeElement.style.fontWeight='normal'
  //   this.elementref.nativeElement.style.color = 'darkkhaki'
  //   this.elementref.nativeElement.style.backgroundColor='chocolate'
  // }
  // else if(this.menutype=="L")
  // {
  //   this.elementref.nativeElement.style.fontWeight='normal'
  //   this.elementref.nativeElement.style.color = 'white'
  //   this.elementref.nativeElement.style.backgroundColor='crimson'
  // }
}
}
