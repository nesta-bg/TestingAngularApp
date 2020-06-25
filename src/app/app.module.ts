import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoteComponent } from './setup-and-teardown/vote.component';
import { TodoFormComponent } from './forms/todo-form.component';
import { TodosComponent } from './services/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    TodoFormComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
