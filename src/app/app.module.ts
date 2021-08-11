import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscaDadosComponent } from './components/busca-dados/busca-dados.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BuscaDadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      FormsModule
  ],
  providers: [AppRoutingModule,{provide: 'Portuguese Brazil', useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
