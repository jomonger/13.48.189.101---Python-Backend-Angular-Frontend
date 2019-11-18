import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BazaAPIComponent } from './baza-api.component';

describe('BazaAPIComponent', () => {
  let component: BazaAPIComponent;
  let fixture: ComponentFixture<BazaAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BazaAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BazaAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
