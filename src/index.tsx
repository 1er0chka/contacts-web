import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./service/Router"
import './index.css'
import {ContextMenuProvider} from "./provider/ContextMenuContext"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ContextMenuProvider>
            <Router/>
        </ContextMenuProvider>
    </React.StrictMode>
);
