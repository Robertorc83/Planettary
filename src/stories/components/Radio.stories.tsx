import {Meta, StoryObj} from '@storybook/react';
import {Radio} from '@/components/Radio';

const meta: Meta = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    width: {control: 'text'},
    label: {control: 'text'},
    checkedValue: {control: 'text'},
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'Default Button',
    label: 'Default Button',
  },
};

export const CheckedRadio: Story = {
  args: {
    value: 'Default Button',
    label: 'Default Button',
    checkedValue: 'Default Button',
  },
};
