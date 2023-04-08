import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/ThemeSwitcher',
    component: AboutPage,
};

export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Primary: Story = {};
