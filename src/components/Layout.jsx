import { Outlet } from 'react-router-dom';
import { Menu } from './Menu/Menu';
import { Suspense } from 'react';

export const Layout = () => {
    return (
    <>
        <Menu />
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
    </>
    );
};