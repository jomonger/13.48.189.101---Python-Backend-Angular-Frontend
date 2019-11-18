import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KolkoIKrzyzykComponent } from './kolko-i-krzyzyk.component';

describe('KolkoIKrzyzykComponent', () => {
  let component: KolkoIKrzyzykComponent;
  let fixture: ComponentFixture<KolkoIKrzyzykComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KolkoIKrzyzykComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KolkoIKrzyzykComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
