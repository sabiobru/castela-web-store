import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProviderCmsComponent } from './create-provider-cms.component';

describe('CreateProviderCmsComponent', () => {
  let component: CreateProviderCmsComponent;
  let fixture: ComponentFixture<CreateProviderCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProviderCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProviderCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
