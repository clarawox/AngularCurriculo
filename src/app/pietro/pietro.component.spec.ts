import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PietroComponent } from './pietro.component';

describe('PietroComponent', () => {
  let component: PietroComponent;
  let fixture: ComponentFixture<PietroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PietroComponent]
    });
    fixture = TestBed.createComponent(PietroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
