import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuizaComponent } from './luiza.component';

describe('LuizaComponent', () => {
  let component: LuizaComponent;
  let fixture: ComponentFixture<LuizaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuizaComponent]
    });
    fixture = TestBed.createComponent(LuizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
