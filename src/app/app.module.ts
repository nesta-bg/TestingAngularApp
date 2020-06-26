import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoteComponent } from './setup-and-teardown/vote.component';
import { TodoFormComponent } from './forms/todo-form.component';
import { TodosComponent } from './services/todos.component';
import { TextSummaryPipe } from './text-summary-pipe/text-summary.pipe';
import { LikeComponent } from './like/like.component';
import { VoterComponent } from './voter/voter.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    TodoFormComponent,
    TodosComponent,
    TextSummaryPipe,
    LikeComponent,
    VoterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
