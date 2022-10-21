import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
})
export class InventarioComponent implements OnInit {

  copyright = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
