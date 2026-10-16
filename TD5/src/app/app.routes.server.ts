import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },

  {
    path: 'consultAct/:id/:name',
    renderMode: RenderMode.Server 
  },

  {
    path: 'consultAct/:id',
    renderMode: RenderMode.Server
  }
];
