import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCmsComponent } from './client-cms.component';

describe('ClientCmsComponent', () => {
  let component: ClientCmsComponent;
  let fixture: ComponentFixture<ClientCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
