import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { ConsultActivity } from './consult-activity/consult-activity';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "about",
        component: About
    },
    {
        path: "consultAct",
        component: ConsultActivity
    },
    {
        path: "consultAct/:id",
        component: ConsultActivity
    },
    {
        path: "consultAct/:id/:name",
        component: ConsultActivity
    }
];
