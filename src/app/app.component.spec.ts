import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from 'protractor';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [ AppComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // DEFAULT TESTS

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'TestingAngularApp'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('TestingAngularApp');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('TestingAngularApp app is running!');
  // });

  // ROUTER OUTLET

  // it('should have a router outlet', () => {
  //   let de = fixture.debugElement.query(By.directive(RouterOutlet));

  //   expect(de).not.toBeNull();
  // });

  // it('should have a link to todos page', () => {
  //   let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

  //   // <a href="/todos">
  //   // should be like this but not: de.attributes['href']
  //   let href = 'href';
  //   let index = debugElements.findIndex(de => de.properties[href] === '/todos');

  //   expect(index).toBeGreaterThan(-1);
  // });
});
