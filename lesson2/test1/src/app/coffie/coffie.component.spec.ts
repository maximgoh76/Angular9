import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffieComponent } from './coffie.component';

describe('CoffieComponent', () => {
  let component: CoffieComponent;
  let fixture: ComponentFixture<CoffieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
