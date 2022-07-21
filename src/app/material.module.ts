import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatTabsModule, MatToolbarModule, MatIconModule],
  exports: [MatTabsModule, MatToolbarModule, MatIconModule],
  providers: [],
})
export class InvMaterialModule {}
