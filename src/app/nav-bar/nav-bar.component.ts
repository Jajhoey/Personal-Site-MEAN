import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['../app.component.css'],
  outputs: ['view'],
})

export class NavBarComponent implements OnInit{
  constructor() {

  }

  ngOnInit(): void {
  }


}
