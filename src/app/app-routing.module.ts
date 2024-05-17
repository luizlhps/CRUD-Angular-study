import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';

const routes: Routes = [
  {
    path: 'create-thought',
    component: CreateThoughtsComponent,
  },
  {
    path: '',
    component: ListThoughtsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
