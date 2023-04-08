import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: Story) => {
    return (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    );
};
