import type { Meta, StoryObj } from '@storybook/react';
import { Navbar, } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
    args: {
       
    },
};

