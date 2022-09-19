import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { AgregarEditarProductoComponent } from './components/agregar-editar-producto/agregar-editar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListProductosComponent,
    ProgressBarComponent,
    AgregarEditarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right', }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
