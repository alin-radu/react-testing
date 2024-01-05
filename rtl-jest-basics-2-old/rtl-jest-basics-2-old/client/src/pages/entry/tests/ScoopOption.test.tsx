import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../test-utils/testing-library-utils';

import { ScoopOption } from '../ScoopOption';

describe('ScoopOption', () => {
  test('indicate if scoop count is non-int or out of range', async () => {
    const user = userEvent.setup();
    render(<ScoopOption name={'name'} imagePath={'imagePath'} />);

    // expect input to be invalid with negative number
    const vanillaInput = screen.getByRole('spinbutton');
    await user.clear(vanillaInput);
    await user.type(vanillaInput, '-1');
    expect(vanillaInput).toHaveClass('form-control is-invalid');

    // // expect input to be invalid with ndecimal input
    // await user.clear(vanillaInput);
    // await user.type(vanillaInput, '2.5');
    // expect(vanillaInput).toHaveClass('form-control is-invalid');

    // // expect input to be invalid if the value is to hight
    // await user.clear(vanillaInput);
    // await user.type(vanillaInput, '11');
    // expect(vanillaInput).toHaveClass('form-control is-invalid');

    // // expect input to be valid if the value is replaced with a valid input
    // await user.clear(vanillaInput);
    // await user.type(vanillaInput, '3');
    // expect(vanillaInput).not.toHaveClass('form-control is-invalid');
  });
});
