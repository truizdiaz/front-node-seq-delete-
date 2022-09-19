import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarProductoComponent } from './components/agregar-editar-producto/agregar-editar-producto.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';

const routes: Routes = [
  { path: '', component: ListProductosComponent },
  { path: 'agregar', component: AgregarEditarProductoComponent },
  { path: 'edit/:id', component: AgregarEditarProductoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
