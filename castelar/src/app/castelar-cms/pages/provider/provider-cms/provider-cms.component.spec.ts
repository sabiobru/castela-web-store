import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderCmsComponent } from './provider-cms.component';

describe('ProviderCmsComponent', () => {
  let component: ProviderCmsComponent;
  let fixture: ComponentFixture<ProviderCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
