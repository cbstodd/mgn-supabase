import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGiftListComponent } from './my-gift-list.component';

describe('MyGiftListComponent', () => {
  let component: MyGiftListComponent;
  let fixture: ComponentFixture<MyGiftListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGiftListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGiftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
