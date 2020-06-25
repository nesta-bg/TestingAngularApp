import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    // set up
    component = new VoteComponent();
  });

  afterEach(() => {
    // tear down
  });

  beforeAll(() => {

  });

  afterAll(() => {

  });

  it('should increment totalVotes when upvoted', () => {
    // Triple A - Arrange, Act, Assert

    // let component = new VoteComponent();

    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});
