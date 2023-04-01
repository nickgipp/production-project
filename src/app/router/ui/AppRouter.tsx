import { routeConfig } from 'app/config/routeConfig/routeConfig';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route key={path} path={path} element={<div className="wPage">{element}</div>} />
                ))}
            </Routes>
        </Suspense>
    );
};
