import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoteComponent } from './setup-and-teardown/vote.component';
import { TodoFormComponent } from './forms/todo-form.component';
import { TodosComponent } from './services/todos.component';
import { TextSummaryPipe } from './text-summary-pipe/text-summary.pipe';
import { LikeComponent } from './like/like.component';
import { VoterComponent } from './voter/voter.component';
import { UsersComponent } from './users/users.component';
import { ItVoterComponent } from './it-voter/it-voter.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    TodoFormComponent,
    TodosComponent,
    TextSummaryPipe,
    LikeComponent,
    VoterComponent,
    UsersComponent,
    ItVoterComponent,
    UserDetailsComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
