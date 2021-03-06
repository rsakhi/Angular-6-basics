import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [{type: "server", name: "default server", content: "first default server"}]
  title = 'binding';

  onServerAdded(serverData){
    this.servers.push({
      type: "Server",
      name: serverData.name,
      content: serverData.containt
    })
  }
}
