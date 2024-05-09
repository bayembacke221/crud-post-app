import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUpdatePostComponent } from './main-update-post.component';

describe('MainUpdatePostComponent', () => {
  let component: MainUpdatePostComponent;
  let fixture: ComponentFixture<MainUpdatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainUpdatePostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainUpdatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
