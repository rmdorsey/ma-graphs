import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Micro-Frontend Graphs';

  constructor() {
  }

  config = {
    "bar-graph": {
      loaded: false,
      path: 'bar-graph/main.js',
      element: 'bar-graph-ma'
    },
    "pie-graph": {
      loaded: false,
      path: 'pie-graph/main.js',
      element: 'pie-graph-ma'
    }
  };

  ngOnInit() {
    console.log("hello from the shell");
    this.load('bar-graph');
    this.load('pie-graph');
  }

  load(name: string): void {
    console.log("HELLO LOAD");
    const configItem = this.config[name];
    if (configItem.loaded) return;

    const content = document.getElementById('content');

    const script = document.createElement('script');
    script.src = configItem.path;
    content.appendChild(script);

    // const element: HTMLElement = document.createElement(configItem.element);
    // content.appendChild(element);
    //
    // // element.addEventListener('message', msg => this.handleMessage(msg));
    // element.setAttribute('state', 'init');

    script.onerror = () => console.error(`error loading ${configItem.path}`);

    // this.stateService.registerClient(element);

  }

  // handleMessage(msg): void {
  //   console.debug('shell received message: ', msg.detail);
  // }
}
