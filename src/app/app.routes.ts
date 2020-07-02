import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home.component';

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  // to ensure we are testing the right thing comment the line below
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', component: HomeComponent }
];

