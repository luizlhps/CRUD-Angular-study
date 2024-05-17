import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { UpdateThoughtComponent } from './update-thought/update-thought.component';

const routes: Routes = [
  {
    path: 'create-thought',
    component: CreateThoughtsComponent,
  },
  {
    path: '',
    component: ListThoughtsComponent,
  },
  {
    path: 'delete-thought/:id',
    component: DeleteThoughtComponent,
  },
  {
    path: 'update-thought/:id',
    component: UpdateThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
