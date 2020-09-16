import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FailurePagePage } from './failure-page.page';

describe('FailurePagePage', () => {
  let component: FailurePagePage;
  let fixture: ComponentFixture<FailurePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailurePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FailurePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
