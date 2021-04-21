import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStoreCmsComponent } from './update-store-cms.component';

describe('UpdateStoreCmsComponent', () => {
  let component: UpdateStoreCmsComponent;
  let fixture: ComponentFixture<UpdateStoreCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStoreCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStoreCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
