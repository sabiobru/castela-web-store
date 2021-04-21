import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClientCmsComponent } from './create-client-cms.component';

describe('CreateClientCmsComponent', () => {
  let component: CreateClientCmsComponent;
  let fixture: ComponentFixture<CreateClientCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClientCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClientCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
