import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGiftDetailsComponent } from './my-gift-details.component';

describe('MyGiftDetailsComponent', () => {
  let component: MyGiftDetailsComponent;
  let fixture: ComponentFixture<MyGiftDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGiftDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGiftDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
