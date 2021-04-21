import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientCmsComponent } from './update-client-cms.component';

describe('UpdateClientCmsComponent', () => {
  let component: UpdateClientCmsComponent;
  let fixture: ComponentFixture<UpdateClientCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateClientCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
