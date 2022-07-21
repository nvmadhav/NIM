import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InvMaterialModule } from './material.module';
import { CoreModule } from './core/core.module';
import { RoutesModule } from './routes/routes.module';

@NgModule({
  imports: [BrowserModule, FormsModule, InvMaterialModule, CoreModule, RoutesModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
