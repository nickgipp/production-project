import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
    args: {},
};
Primary.decorators = [StoreDecorator({ user: { authData: undefined } })];

export const PrimaryAuth: Story = {
    args: {},
};
PrimaryAuth.decorators = [StoreDecorator({ user: { authData: {} } })];
