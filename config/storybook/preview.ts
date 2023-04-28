import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        // decorators: [StyleDecorator, ThemeDecorator],
    },
};
export const decorators = [StyleDecorator, ThemeDecorator, RouterDecorator];
export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        toolbar: {
            // https://5a375b97f4b14f0020b0cda3-wbeulgbetj.chromatic.com/?path=/story/basics-icon--labels
            icon: 'circlehollow',
            items: [
                { value: 'app_light_theme', title: 'Light' },
                { value: 'app_dark_theme', title: 'Dark' },
            ],
            showName: true,
            dynamicTitle: true,
        },
    },
};

export default preview;
