import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template:
  // <app-server></app-server>
  // < app-server></app-server>
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created ';
  serverName: string;
  serverCreated = false;
  servers = ['testServer', 'testServer2', 'testServer3'];

  constructor() {
    setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'New Server was created is' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
  console.log(event);
  this.serverName = (<HTMLInputElement>event.target).value;
  }

}


