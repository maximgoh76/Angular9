import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-homeContent',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements 
OnChanges, OnInit, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input("msg") msg:string="";

  constructor() {
    console.log("constructor ",this.msg);
  }

  // Initialize the directive/component after Angular first displays the
  // data-bound properties and sets the directive/component's input properties.
  // Called once, after the first ngOnChanges().
  ngOnInit(): void { 
    console.log("ngOnInit ",this.msg);
  }


  // Respond when Angular (re)sets data-bound input properties.
  // The method receives a SimpleChanges object of current and previous property values.
  // Called before ngOnInit() and whenever one or more data-bound input properties change.
  public ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges ",changes);
  }


  // Detect and act upon changes that Angular can't or won't detect on its own.
  // Called during every change detection run, immediately after ngOnChanges() and ngOnInit().
  ngDoCheck(): void {
    console.log("ngDoCheck ",this.msg);
  }

  // Respond after Angular projects external content into the component's view.
  // Called once after the first ngDoCheck().
  // A component-only hook.
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit ",this.msg);
  }

  // Respond after Angular checks the content projected into the component.
  // Called after the ngAfterContentInit() and every subsequent ngDoCheck().
  // A component-only hook.
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked ",this.msg);
  }

  // Respond after Angular initializes the component's views and child views.
  // Called once after the first ngAfterContentChecked().
  // A component-only hook.
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit ",this.msg);
  }

  // Respond after Angular checks the component's views and child views.
  // Called after the ngAfterViewInit and every subsequent ngAfterContentChecked().
  // A component-only hook.
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked ",this.msg);
  }

  // Cleanup just before Angular destroys the directive/component.
  // Unsubscribe Observables and detach event handlers to avoid memory leaks.
  // Called just before Angular destroys the directive/component. 
  ngOnDestroy(): void {
    console.log("ngOnDestroy ",this.msg);
  }
}