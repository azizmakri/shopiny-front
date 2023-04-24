import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeforumComponent } from './listeforum.component';

describe('ListeforumComponent', () => {
  let component: ListeforumComponent;
  let fixture: ComponentFixture<ListeforumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeforumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
