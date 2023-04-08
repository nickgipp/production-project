import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from './PageError';
import { ErrorBoundary } from 'react-error-boundary';
const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
    decorators: [
        (Story) => (
            <ErrorBoundary fallback={<></>}>
                <Story />
            </ErrorBoundary>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof PageError>;

export const Primary: Story = {
    args: {},
};
