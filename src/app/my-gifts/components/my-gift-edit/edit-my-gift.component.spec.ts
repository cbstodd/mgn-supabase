import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyGiftComponent } from './edit-my-gift.component';

describe('EditMyGiftComponent', () => {
  let component: EditMyGiftComponent;
  let fixture: ComponentFixture<EditMyGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMyGiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMyGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
