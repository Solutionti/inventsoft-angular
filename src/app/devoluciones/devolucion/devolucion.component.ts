import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devolucion',
  templateUrl: './devolucion.component.html',
})
export class DevolucionComponent implements OnInit {

  copyright = new Date().getFullYear();
  
  constructor() { }

  ngOnInit(): void {
  }

}
