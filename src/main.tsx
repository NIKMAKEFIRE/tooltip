import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TooltipProvider, WindowWidthProvider } from './context';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <WindowWidthProvider>
                <TooltipProvider>
                    <App />
                </TooltipProvider>
            </WindowWidthProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
