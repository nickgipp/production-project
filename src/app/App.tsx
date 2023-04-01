import { Link } from 'react-router-dom';
import './styles/index.scss';
import { cl } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';



const App = () => {
    const { theme } = useTheme();
    return (
        <div className={cl('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar />
                <div className='contentPage'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    );
};

export default App;
