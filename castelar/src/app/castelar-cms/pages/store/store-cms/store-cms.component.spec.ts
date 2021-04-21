import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCmsComponent } from './store-cms.component';

describe('StoreCmsComponent', () => {
  let component: StoreCmsComponent;
  let fixture: ComponentFixture<StoreCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
