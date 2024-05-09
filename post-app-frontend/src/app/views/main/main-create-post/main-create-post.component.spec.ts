import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCreatePostComponent } from './main-create-post.component';

describe('MainCreatePostComponent', () => {
  let component: MainCreatePostComponent;
  let fixture: ComponentFixture<MainCreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCreatePostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
