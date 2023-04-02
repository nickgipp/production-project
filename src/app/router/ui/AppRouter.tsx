import { routeConfig } from 'app/config/routeConfig/routeConfig';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route key={path} path={path} element={<div className="wPage">{element}</div>} />
                ))}
            </Routes>
        </Suspense>
    );
};
