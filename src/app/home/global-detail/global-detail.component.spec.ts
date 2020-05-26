import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalDetailComponent } from './global-detail.component';

describe('GlobalDetailComponent', () => {
  let component: GlobalDetailComponent;
  let fixture: ComponentFixture<GlobalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
