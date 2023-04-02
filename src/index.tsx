import { ThemeProvider } from 'app/providers/ThemeProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'react-error-boundary';
import { PageError } from 'widgets/PageError';

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <ErrorBoundary FallbackComponent={PageError}>
                <App />
            </ErrorBoundary>
        </ThemeProvider>
    </BrowserRouter>
);
