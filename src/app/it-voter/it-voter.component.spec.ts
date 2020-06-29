import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ItVoterComponent } from './it-voter.component';

describe('ItVoterComponent', () => {
  let fixture: ComponentFixture<ItVoterComponent>;
  let component: ItVoterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ItVoterComponent ]
    });

    // fixture = wrapper around the component
    fixture = TestBed.createComponent(ItVoterComponent);
    component = fixture.componentInstance;

    // nat Element = returns an html element which is the root dom element for component template
    let natElement = fixture.nativeElement;
    // wrapper around nativeElement
    let dbgElement = fixture.debugElement;
  });

  it('', () => {
  });
});

