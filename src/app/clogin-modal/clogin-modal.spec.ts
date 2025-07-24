import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLoginModal } from './clogin-modal';

describe('CLoginModal', () => {
  let component: CLoginModal;
  let fixture: ComponentFixture<CLoginModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CLoginModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CLoginModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
