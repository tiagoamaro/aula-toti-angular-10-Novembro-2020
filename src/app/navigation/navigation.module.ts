import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [SearchComponent, ItemsComponent],
  imports: [
    CommonModule
  ],
  exports: [SearchComponent, ItemsComponent]
})
export class NavigationModule { }
