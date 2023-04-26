import EventEmitter from 'events';
import React, { useCallback, useEffect, useState } from 'react';
import { IModal, IModalParams } from './interface';
import { Modal } from './Modal';

const ev = new EventEmitter();

export const modal: IModal = {
    open: (component, props) => {
        ev.emit('open', { component, props });
    },
    close: () => {
        ev.emit('close');
    },
};

export const ModalConnector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<React.ReactNode>(null);
    const [props, setProps] = useState<IModalParams>({});

    const openModal = useCallback(
        ({
            component,
            props,
        }: {
            component: React.ReactNode;
            props: IModalParams;
        }) => {
            setContent(component);
            setProps(props);
            setIsOpen(true);
        },
        [setContent, setProps, setIsOpen]
    );

    const closeModal = useCallback(() => setIsOpen(false), [setIsOpen]);

    useEffect(() => {
        ev.on('open', openModal);
        ev.on('close', closeModal);

        return () => {
            ev.off('open', openModal);
            ev.off('close', closeModal);
        };
    }, [openModal, closeModal]);

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} {...props}>
            {content}
        </Modal>
    );
};
