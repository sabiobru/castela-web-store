import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProviderCmsComponent } from './update-provider-cms.component';

describe('UpdateProviderCmsComponent', () => {
  let component: UpdateProviderCmsComponent;
  let fixture: ComponentFixture<UpdateProviderCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProviderCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProviderCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
