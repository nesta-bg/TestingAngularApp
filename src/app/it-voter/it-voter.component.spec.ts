import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { ItVoterComponent } from './it-voter.component';

describe('ItVoterComponent', () => {
  let fixture: ComponentFixture<ItVoterComponent>;
  let component: ItVoterComponent;

  // Angular CLI generated code
  // the component template is in the separate file and we need to instruct angular to compile thet template,
  // as well as the stylesheet with the component implementation
  // not necessary (when we use webpack it automatically inlines component template and stylesheet in our js bundle)

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ ItVoterComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ItVoterComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

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

