import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Dropdown} from '@/components/Dropdown';

describe('<Dropdown />', () => {
  const mockOnValueChange = jest.fn();
  const mockAction = jest.fn();

  const options = [
    {label: 'Option 1', value: 'opt1', action: mockAction},
    {label: 'Option 2', value: 'opt2'},
    {label: 'Reset', value: 'RESET'},
  ];

  beforeEach(() => {
    render(
      <Dropdown
        id="dropdown-test"
        placeholder="Select an option"
        options={options}
        onValueChange={mockOnValueChange}
      />,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('opens the dropdown when the button is clicked', async () => {
    userEvent.click(screen.getByRole('button', {name: /menu/i}));

    // Using findByText for potential delays
    expect(await screen.findByText('Option 1')).toBeVisible();
    expect(await screen.findByText('Option 2')).toBeVisible();
    expect(await screen.findByText('Reset')).toBeVisible();
  });

  it('calls onValueChange and action when an option is clicked', async () => {
    userEvent.click(screen.getByRole('button', {name: /menu/i}));
    userEvent.click(await screen.findByText('Option 1'));

    await waitFor(() => {
      expect(mockOnValueChange).toHaveBeenCalledWith('opt1');
      expect(mockAction).toHaveBeenCalledTimes(1);
    });
  });

  it('calls onValueChange with null when RESET is clicked', async () => {
    userEvent.click(screen.getByRole('button', {name: /menu/i}));
    userEvent.click(await screen.findByText('Reset'));

    await waitFor(() => {
      expect(mockOnValueChange).toHaveBeenCalledWith(null);
    });
  });
});
