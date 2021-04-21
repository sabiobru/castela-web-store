import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsClientCmsComponent } from './details-client-cms.component';

describe('DetailsClientCmsComponent', () => {
  let component: DetailsClientCmsComponent;
  let fixture: ComponentFixture<DetailsClientCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsClientCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsClientCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
