import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

// Lazy load pages
const Home = lazy(() => import('../pages/Home').then(module => ({ default: module.default })));


export const router = createBrowserRouter([
  {
    path: '*',
    element: (
        <NotFound />
    ),
  },

  {
    path: '/',
    element: (

        <Suspense fallback={
          <div className='w-full h-svh flex justify-center items-center bg-[#F8F9FA]'>
            <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
          </div>
        }>
          <Home />
        </Suspense>

    ),
  },

]);