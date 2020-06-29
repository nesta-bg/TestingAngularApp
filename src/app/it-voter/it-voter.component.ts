import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-it-voter',
  templateUrl: './it-voter.component.html',
  styleUrls: ['./it-voter.component.css']
})
export class ItVoterComponent {

  constructor() { }
  @Input() othersVote = 0;
  @Input() myVote = 0;

  @Output() vote = new EventEmitter();

  upVote() {
    if (this.myVote === 1)
      return;

    this.myVote++;

    this.vote.emit({ myVote: this.myVote });
  }

  downVote() {
    if (this.myVote === -1)
      return;

    this.myVote--;

    this.vote.emit({ myVote: this.myVote });
  }

  get totalVotes() {
    return this.othersVote + this.myVote;
  }

}
