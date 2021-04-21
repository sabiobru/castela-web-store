import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStoreCmsComponent } from './details-store-cms.component';

describe('DetailsStoreCmsComponent', () => {
  let component: DetailsStoreCmsComponent;
  let fixture: ComponentFixture<DetailsStoreCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsStoreCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsStoreCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
