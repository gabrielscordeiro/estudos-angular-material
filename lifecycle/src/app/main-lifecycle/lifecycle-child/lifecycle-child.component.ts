import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChange, SimpleChanges, AfterContentInit, AfterViewInit } from '@angular/core';

export interface LifeCycleEvent {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss']
})
export class LifecycleChildComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterViewInit {
  @Input() private name: string;
  @Input() private age: number;
  @Input() private food: string;

  public events: LifeCycleEvent[] = [];
  private nextEventId: number = 0;

  private colors: string[] = ['accent', 'warn', 'primary'];

  constructor() {
    console.log(`${this.name} - constructor`);
    this.newEvent('constructor');
  }

  ngOnInit() {
    console.log(`${this.name} - ngOnInit`);
    this.newEvent('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`${this.name} - ngOnChanges`);
    this.newEvent('ngOnChanges');
  }

  ngAfterContentInit() {
    console.log(`${this.name} - ngAfterContentInit`);
    this.newEvent('ngAfterContentInit');
  }

  ngAfterViewInit() {
    console.log(`${this.name} - ngAfterViewInit`);
    this.newEvent('ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log(`${this.name} - NgOnDestroy`);
    this.newEvent('ngOnDestroy');
  }

  newEvent(name: string) {
    let id = this.nextEventId++;
    this.events.push({
      id: id,
      name: name,
      color: this.colors[id % this.colors.length]
    })

    setTimeout(() => {
      let idx = this.events.findIndex((e) => e.id == id);
      if(idx >= 0){
        this.events.splice(idx, 1);
      }
    }, 3000 + this.events.length * 2000)
  }
}
