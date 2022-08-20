import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-icon',
  templateUrl: './server-icon.component.html',
  styleUrls: ['./server-icon.component.css']
})
export class ServerIconComponent implements OnInit {
  mustShowServerName = false;

  constructor() { }

  ngOnInit(): void {
  }

  showServerName(show: boolean) {
    this.mustShowServerName = show;
  }
}
