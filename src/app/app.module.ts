import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoteComponent } from './setup-and-teardown/vote.component';
import { TodoFormComponent } from './forms/todo-form.component';
import { TodosComponent } from './services/todos.component';
import { TextSummaryPipe } from './text-summary-pipe/text-summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    TodoFormComponent,
    TodosComponent,
    TextSummaryPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
