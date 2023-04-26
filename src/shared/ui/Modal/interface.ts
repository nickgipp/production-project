import { ComponentProps, ReactNode } from 'react';

export interface IModalParams {
    className?: string;
    addClassNames?: string[];
    componentProps?: ComponentProps<any>;
}

export interface IModal {
    open: (component: ReactNode | string, props?: IModalParams) => void;
    close: () => void;
}
