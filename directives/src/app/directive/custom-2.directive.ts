import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom2]'
})
export class Custom2Directive implements OnInit{

  constructor(private eleRef: ElementRef, private render: Renderer2) { }

  ngOnInit(){
    this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
  }
}
