import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvsetComponent } from './envset.component';

describe('EnvsetComponent', () => {
  let component: EnvsetComponent;
  let fixture: ComponentFixture<EnvsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
