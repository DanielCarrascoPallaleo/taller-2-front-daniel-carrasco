import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PokemonProvider } from './src/context/PokemonContext.jsx';
import App from './App.jsx';
import { Home } from './src/pages/Home.jsx';
import { Implementacion } from './src/pages/Implementacion.jsx';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/implementacion',
        element: <Implementacion />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvider>
        <RouterProvider router={router} />
    </PokemonProvider>
  </React.StrictMode>,
)