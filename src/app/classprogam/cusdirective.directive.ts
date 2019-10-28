import { Directive,ElementRef,Renderer,HostListener } from '@angular/core';

@Directive({
  selector: '[appCusdirective]'
})
export class CusdirectiveDirective {

  constructor( private er:ElementRef,private rd:Renderer) {
  rd.setElementStyle(er.nativeElement, 'color', 'blue');
  rd.setElementStyle(er.nativeElement,'background-color','yellow');
  
   }
   @HostListener('mouseover')myMouseOver(){
     this.rd.setElementStyle(this.er.nativeElement,'background-color','orange')
   }
   @HostListener('mouseleave')myMouseLeave(){
     this.rd.setElementStyle(this.er.nativeElement,'background-color','gray')
   }

}
