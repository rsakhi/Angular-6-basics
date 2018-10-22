import { Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{name: String, containt:String}>();
  // serverName:String=""; no need since we are using local ref
  // serverContaint:String="";
  
  @ViewChild('serverContentInput') serverContent; 

  isServerAdded:boolean = false
  constructor() { }

  ngOnInit() {
  }

  onServerAdded(serverNameInput){
    this.serverCreated.emit({
      name: serverNameInput.value,
      containt: this.serverContent.nativeElement.value
    })
    this.isServerAdded = true
  }
}
