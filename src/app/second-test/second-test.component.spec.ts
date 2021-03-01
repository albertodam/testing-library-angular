
import { ReactiveFormsModule } from '@angular/forms';
import { fireEvent, render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { SecondTestComponent } from './second-test.component';


describe('SecondTestComponent', () => {

  it('should create', async () => {
    await render(SecondTestComponent, {
      imports: [
        ReactiveFormsModule
      ]
    });
    expect(screen.getByText('second-test works!'));
  });

  it('should create', async () => {
    await render(SecondTestComponent, {
      imports: [
        ReactiveFormsModule
      ]
    });
    const nameControl = document.querySelector('#name-gretting');
    userEvent.type(nameControl, 'Alberto');
    fireEvent.click(screen.getByText('Saluda'));
    expect(document.querySelector('#gretting').textContent).toEqual('Hola, Alberto');
  });
});
