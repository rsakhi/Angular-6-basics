import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-demo",
	templateUrl: "./demo.component.html"
})

export class DemoComponent implements OnInit{
	constructor(){};
	evenNumber = [2,4,6,8];
	oddNumber = [1,3,5,7];
	showEven:boolean = true
	ngOnInit(){
		
	}

}