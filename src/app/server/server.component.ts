import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverID: number = 1;
  serverName: string = 'Geo';
  serverStatus: string = 'offline';
}
