import { Component, OnInit, Input } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input('state')
  set state(state: string) {
      console.log('client-a received state', state);
  }

  // @Output() message = new EventEmitter<any>();

  title = 'bar-graph';

  constructor() {
  }

  ngOnInit() {
    console.log("hello from micro app");
  }

  ngAfterViewInit() {
    let chart = c3.generate({
    bindto: '#chart',
      size: {
          height: 500,
          width: 1000
      },
      data: {
        columns: [
          ['Type 1', 76.6, 18.1, 13.4, 0],
          ['Type 2', 38, 18, 36, 0]
        ],
        type: 'bar'
      },
      bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
      },
      axis: {
        x: {
            type: 'category',
            categories: ['Cat 1', 'Cat 2', 'Cat 3', 'Cat 4']
        }
      },
      grid: {
        x: {
          show: true
        },
        y: {
          show: true
        }
      }

    });
  }
}
