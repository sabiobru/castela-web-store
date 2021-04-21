import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStoreCmsComponent } from './create-store-cms.component';

describe('CreateStoreCmsComponent', () => {
  let component: CreateStoreCmsComponent;
  let fixture: ComponentFixture<CreateStoreCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStoreCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStoreCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
