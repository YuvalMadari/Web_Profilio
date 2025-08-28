import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cert } from './cert';

describe('Cert', () => {
  let component: Cert;
  let fixture: ComponentFixture<Cert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
