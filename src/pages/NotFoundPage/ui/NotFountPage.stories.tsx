import type { Meta, StoryObj } from '@storybook/react';
import { NotFountPage } from './NotFountPage';

const meta: Meta<typeof NotFountPage> = {
    title: 'pages/NotFountPage',
    component: NotFountPage,
};

export default meta;

type Story = StoryObj<typeof NotFountPage>;

export const Primary: Story = {};
