import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import AppNavbar from './components/navigation/AppNavbar';

import { Container } from '@mui/material';
// import CalculationTypeConfiguration from './pages/configuration/calculationType';
// import PaymentStatistics from './pages/statistics/Payment';





import Employees from "./pages/employees/Employees";
// import Recipes from "./pages/Recipes";
// import Settings from "./pages/Settings";

const Root = () => {
  return <>
    <AppNavbar />
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: '#f0f0f0',
        minHeight: 'calc(100vh - 64px)',
        padding: '24px'
      }}>
      <Outlet />
    </Container>
  </>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Employees />
  },
  {
    path: '/:id',
    element: <Root />,
    children: [
      {
        path: '/view',
        children: [
          {
            path: '/edit',
            // element: <CalculationTypeConfiguration />
          },
        ]
      },
      {
        path: 'delete',
        children: [
          {
            path: 'add',
            // element: <PaymentStatistics />
          }
        ]
      },
    ]
  },

])




