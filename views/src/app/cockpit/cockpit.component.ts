import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{name: String, containt:String}>();
  serverName:String="";
  serverContaint:String="";

  isServerAdded:boolean = false
  constructor() { }

  ngOnInit() {
  }

  onServerAdded(){
    this.serverCreated.emit({
      name: this.serverName,
      containt: this.serverContaint
    })
    this.isServerAdded = true
  }
}
