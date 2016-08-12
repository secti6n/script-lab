import {provideRouter, RouterConfig} from '@angular/router';
import {RunComponent, EditorComponent, NewComponent, ViewComponent} from './components'

export const AppRoutes: RouterConfig = [
    {
        path: '',
        redirectTo: 'new',
        pathMatch: 'full'
    },
    {
        path: 'new',
        component: NewComponent,
    },
    {
        path: 'edit/:id',
        component: EditorComponent
    },
    {
        path: 'run/:id',
        component: RunComponent
    },
    {
        path: 'view/:id',
        component: ViewComponent
    }
];

export const routes: RouterConfig = [
    ...AppRoutes,
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];