import {Meta, StoryObj} from '@storybook/react';
import {Button} from '@/components/Button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: {control: 'text'},
    width: {control: 'text'},
    tooltip: {control: 'text'},
    isSecondary: {control: 'boolean'},
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Default Button',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    isSecondary: true,
  },
};
