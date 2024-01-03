import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './components/ui/layout/layout.module';
import { SaleComponent } from './components/screens/sale/sale.component';
import { ProfileComponent } from './components/screens/profile/profile.component';
import { FavoritesComponent } from './components/screens/favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './components/screens/home/home.module';
import { ProductComponent } from './components/screens/product/product.component';
import { ProductModule } from './components/screens/product/product.module';





@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    ProfileComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    HomeModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
