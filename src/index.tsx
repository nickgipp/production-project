import { ThemeProvider } from 'app/providers/ThemeProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ErrorBoundary } from 'react-error-boundary';
import { PageError } from 'widgets/PageError';
import { ModalConnector } from 'shared/ui/Modal/ModalConnector';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/StoreProvider';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <ErrorBoundary FallbackComponent={PageError}>
                    <ModalConnector />
                    <App />
                </ErrorBoundary>
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>
);
