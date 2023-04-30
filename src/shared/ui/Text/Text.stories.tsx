import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text',
    },
};

export const OnliTitle: Story = {
    args: {
        title: 'Title Title Title',
    },
};

export const OnliText: Story = {
    args: {
        text: 'Text Text Text',
    },
};

export const Error: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text',
        theme: TextTheme.ERROR,
    },
};
