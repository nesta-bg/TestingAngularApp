import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
    <button (click)="go()">Go</button>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  go() {
    this.router.navigate(['users', 1]);
  }

}
