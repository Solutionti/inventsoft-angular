import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevolucionComponent } from './devoluciones/devolucion/devolucion.component';
import { GastoComponent } from './gastos/gasto/gasto.component';
import { InventarioComponent } from './inventarios/inventario/inventario.component';
import { LoginComponent } from './login/login/login.component';
import { PerfilComponent } from './perfil/perfil/perfil.component';
import { ReporteComponent } from './reportes/reporte/reporte.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { VentaComponent } from './ventas/venta/venta.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'usuarios',
    component: UsuarioComponent
  },
  {
    path: 'inventarios',
    component: InventarioComponent
  },
  {
    path: 'ventas',
    component: VentaComponent
  },
  {
    path: 'gastos',
    component: GastoComponent
  },
  {
    path: 'devoluciones',
    component: DevolucionComponent
  },
  {
    path: 'reportes',
    component: ReporteComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
