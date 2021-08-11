import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaDadosComponent } from './busca-dados.component';

describe('BuscaDadosComponent', () => {
  let component: BuscaDadosComponent;
  let fixture: ComponentFixture<BuscaDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaDadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
