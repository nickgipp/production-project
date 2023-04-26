import { ThemeProvider } from 'app/providers/ThemeProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ErrorBoundary } from 'react-error-boundary';
import { PageError } from 'widgets/PageError';
import { ModalConnector } from 'shared/ui/Modal/ModalConnector';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <ErrorBoundary FallbackComponent={PageError}>
                <ModalConnector />
                <App />
            </ErrorBoundary>
        </ThemeProvider>
    </BrowserRouter>
);
