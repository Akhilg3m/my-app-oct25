import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbountCompanyComponent } from './abount-company.component';

describe('AbountCompanyComponent', () => {
  let component: AbountCompanyComponent;
  let fixture: ComponentFixture<AbountCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbountCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbountCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
