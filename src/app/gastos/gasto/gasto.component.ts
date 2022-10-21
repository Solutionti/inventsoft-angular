import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
})
export class GastoComponent implements OnInit {

  copyright = new Date().getFullYear();
  
  constructor() { }

  ngOnInit(): void {
  }

}
