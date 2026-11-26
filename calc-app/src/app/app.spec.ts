import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  const setup = async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return fixture;
  };

  const type = async (fixture: any, sel: string, value: string) => {
    const el = fixture.nativeElement.querySelector(sel) as HTMLInputElement;
    el.value = value;
    el.dispatchEvent(new Event(el.tagName === 'SELECT' ? 'change' : 'input'));
    await fixture.whenStable();
  };

  it('computes a sum', async () => {
    const f = await setup();
    await type(f, 'input[aria-label="First number"]', '2');
    await type(f, 'input[aria-label="Second number"]', '3');
    expect(f.nativeElement.querySelector('.result').textContent).toContain('5');
  });

  it('shows an error on divide by zero', async () => {
    const f = await setup();
    await type(f, 'select', 'divide');
    expect(f.nativeElement.querySelector('.error').textContent).toContain('zero');
  });
});
