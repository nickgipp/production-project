import { lazy } from 'react';

export const AboutPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // Тестирование lazy
            setTimeout(() => resolve(import('./AboutPage')), 1500);
        })
);
