/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, LazyExoticComponent } from 'react';

// eslint-disable-next-line quotes
const TooltipAsync: LazyExoticComponent<React.ComponentType<any>> = lazy(() => import('./Tooltip'));

export { TooltipAsync as Tooltip };
