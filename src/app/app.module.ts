import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { ThoughtComponent } from './components/thoughts/thought/thought.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { UpdateThoughtComponent } from './update-thought/update-thought.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtsComponent,
    ListThoughtsComponent,
    ThoughtComponent,
    DeleteThoughtComponent,
    UpdateThoughtComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
