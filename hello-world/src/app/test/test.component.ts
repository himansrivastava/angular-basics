import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-test',
  // selector: '.app-test',
  selector: '[app-test]',
  // templateUrl: './test.component.html',
  // we can use template instead of templateUrl to use inline html
  template:
    `
    <div>
      <h1>Hello World</h1>
    </div>
    `,
  // styleUrls: ['./test.component.css']
  // we can use style instead of styleUrl to use inline css
  styles: [
    `
    h1 {
      color: red;
    }
    `
  ]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
