import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { rootRoute } from './routes/__root.tsx'
import { flashCardRoute } from './routes/flashCards.tsx'

const routeTree = rootRoute.addChildren([
    flashCardRoute,

])


const router = createRouter({ routeTree })


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
