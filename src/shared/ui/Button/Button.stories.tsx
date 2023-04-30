import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const ClearTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearInvertedTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const OutlineTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineThemeSizeL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineThemeSizeXl: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SquareSizeM: Story = {
    args: {
        square: true,
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.M,
    },
};

export const SquareSizeL: Story = {
    args: {
        square: true,
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        square: true,
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.XL,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
        disabled: true,
    },
};
