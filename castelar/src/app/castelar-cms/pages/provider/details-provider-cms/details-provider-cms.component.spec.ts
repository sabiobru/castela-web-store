import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProviderCmsComponent } from './details-provider-cms.component';

describe('DetailsProviderCmsComponent', () => {
  let component: DetailsProviderCmsComponent;
  let fixture: ComponentFixture<DetailsProviderCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsProviderCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsProviderCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
