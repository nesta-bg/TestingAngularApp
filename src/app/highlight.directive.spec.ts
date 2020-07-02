import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `
    <p appHighlight="cyan">First</p>
    <p appHighlight>Second</p>
  `
})
class DirectiveHostComponent {
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveHostComponent, HighlightDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(fixture.debugElement.queryAll(By.css('p'))[0]);
    expect(directive).toBeTruthy();
  });

  it('should highlight the first element with cyan', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[0];

    expect(de.nativeElement.style.backgroundColor).toBe('cyan');
  });

  // fragile = too specific
  // it('should highlight the second element with yellow', () => {
  //   let de = fixture.debugElement.queryAll(By.css('p'))[1];

  //   expect(de.nativeElement.style.backgroundColor).toBe('yellow');
  // });

  it('should highlight the second element with the default color', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[1];
    let directive = de.injector.get(HighlightDirective);

    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });
});
