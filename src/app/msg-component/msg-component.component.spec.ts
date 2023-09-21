import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgComponentComponent } from './msg-component.component';

describe('MsgComponentComponent', () => {
  let component: MsgComponentComponent;
  let fixture: ComponentFixture<MsgComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgComponentComponent]
    });
    fixture = TestBed.createComponent(MsgComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
