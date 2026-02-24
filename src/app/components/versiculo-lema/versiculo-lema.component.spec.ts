import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersiculoLemaComponent } from './versiculo-lema.component';

describe('VersiculoLemaComponent', () => {
  let component: VersiculoLemaComponent;
  let fixture: ComponentFixture<VersiculoLemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersiculoLemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersiculoLemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
