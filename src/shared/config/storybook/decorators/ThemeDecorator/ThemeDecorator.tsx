// import { Story } from '@storybook/react';
// import { Theme } from 'app/providers/ThemeProvider';

// export const ThemeDecorator =  (StoryComponent: Story) => {
//     return (
//         <div className={`app dark'${'theme'}`}>
//             <StoryComponent />
//         </div>
//     );
// };
import classNames from 'classnames';
import { Story, StoryContext } from '@storybook/react';

import { ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (Story: Story, context: StoryContext) => {
    const {
        globals: { theme },
    } = context;

    return (
        <body className={classNames('app', theme)}>
            <ThemeProvider>
                {/* <body className={classNames('app', theme)}> */}
                <Story />
                {/* </body> */}
            </ThemeProvider>
        </body>
    );
};
