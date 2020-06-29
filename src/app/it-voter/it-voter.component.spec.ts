import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ItVoterComponent } from './it-voter.component';

describe('ItVoterComponent', () => {
  let fixture: ComponentFixture<ItVoterComponent>;
  let component: ItVoterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItVoterComponent]
    });

    // fixture = wrapper around the component
    fixture = TestBed.createComponent(ItVoterComponent);
    component = fixture.componentInstance;
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    // Outside this testing environment Angular regularly runs its change detection algorithm.
    // Here we have to explicitly tell Angular when to perform change detection.
    fixture.detectChanges();

    // with this function we want to traverse the DOM and find the first element that matches the given criteria.
    // queryAll - return all the elements that match the predicate
    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = de.nativeElement;

    // this above could be also be done with By.directive
    // - if we have a custom directive and we want to find an element
    // that has that directive applied to it we can pass the directive type here.

    expect(el.innerText).toContain('21');
  });

  it('should highlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    // de.classes
    // de.attributes
    // de.styles

    const theclass = 'highlighted';
    expect(de.classes[theclass]).toBeTruthy();
  });

  // here focus is on the integration of this component and its template
  // all execution paths are tested by using unit tests.
  it('should increase total votes when I click the upvote button', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    // second argument - object that represents additional data about the event
    // (in this case clicking the button doesn't involve any additional data)
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);
  });
});

