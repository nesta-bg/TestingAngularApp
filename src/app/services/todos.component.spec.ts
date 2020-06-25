import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server', () => {
    let todos = [1, 2, 3];

    // with spyOn() we can put a spy on a method in a class,
    // and with that spy we can check if that method has been called,
    // we can change the implementation of that method,
    // we can return a different value or we can throw an error.
    spyOn(service, 'getTodos').and.callFake(() => {
      return from([ todos ]);
    });

    component.ngOnInit();

    // too general
    // expect(component.todos.length).toBeGreaterThan(0);
    // expect(component.todos.length).toBe(3);

    expect(component.todos).toBe(todos);
  });
});

