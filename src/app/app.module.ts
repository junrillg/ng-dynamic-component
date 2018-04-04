import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InitializerComponent } from './initializer/initializer.component';
import { RouterModule, Routes } from '@angular/router';
import { JsonService } from './json.service';
import { RenderComponent } from './render/render.component';
import { TableComponent } from './table/table.component';
import { LoadComponentDirective } from './load-component.directive';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { FilterTypePipe } from './filter-type.pipe';

const appRoutes: Routes = [
  { path: ':data', component: InitializerComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    InitializerComponent,
    RenderComponent,
    TableComponent,
    LoadComponentDirective,
    CardComponent,
    CardsComponent,
    FilterTypePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [JsonService],
  bootstrap: [AppComponent],
  entryComponents: [
    RenderComponent,
  ]
})
export class AppModule { }
