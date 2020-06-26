import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from, EMPTY, throwError } from 'rxjs';

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

  it('should call the server to save the changes when a new todo item is added', () => {
    let spy = spyOn(service, 'add').and.callFake(t => {
      return EMPTY;
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  xit('should add the new todo returned from the server', () => {
    let todo = { id: 1 };
    let spy = spyOn(service, 'add').and.callFake(t => {
      return from([ todo ]);
    });

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should add the new todo returned from the server', () => {
    let todo = { id: 1 };
    let spy = spyOn(service, 'add').and.returnValue(from([ todo ]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set the message property if server returnes an error when adding a new todo', () => {
    let error = 'error from the server';
    let spy = spyOn(service, 'add').and.returnValue(throwError(error));

    component.add();

    expect(component.message).toBe(error);
  });

  it('should call the server to delete a todo item if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(EMPTY);

    component.delete(1);

    // too general
    // expect(spy).toHaveBeenCalled();

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server to delete a todo item if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(EMPTY);

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });
});

