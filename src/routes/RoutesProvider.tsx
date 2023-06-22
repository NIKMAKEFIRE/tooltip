import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RoutePath, routeConfig } from './routeConfig';
import { Loader } from '../components';

const RoutesProvider = (): JSX.Element => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<Loader />}>
                            <>{element}</>
                        </Suspense>
                    }
                />
            ))}
            <Route path="*" element={<Navigate to={RoutePath.home} />} />
        </Routes>
    );
};

export default RoutesProvider;
