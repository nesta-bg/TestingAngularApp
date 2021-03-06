import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should load todos from the server', () => {
  //   // only if you have registered that dependency at the module level
  //   let service = TestBed.get(TodoService);
  //   spyOn(service, 'getTodos').and.returnValue(from([ [1, 2, 3] ]));

  //   // if you have registered that dependency at the component level
  //   // let service = fixture.debugElement.injector.get(TodoService);

  //   fixture.detectChanges();

  //   expect(component.todos.length).toBe(3);
  // });

  // first way
  it('should load todos from the server - first', async(() => {
    let service = TestBed.get(TodoService);
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([ 1, 2, 3 ]));

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);
      console.log('EXPECT WAS CALLED');
    });
  }));

  // second way
  it('should load todos from the server - second', fakeAsync(() => {
    let service = TestBed.get(TodoService);
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([ 1, 2, 3 ]));

    fixture.detectChanges();

    tick();
    expect(component.todos.length).toBe(3);
    console.log('EXPECT WAS CALLED');
  }));

});

