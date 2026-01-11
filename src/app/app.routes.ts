import { Routes } from '@angular/router';
import { AngularConcepts } from './angular-concepts/angular-concepts';
import { App } from './app';
import { Decorators } from './decorators/decorators';
import { Signals } from './signals/signals';
import { Dummy } from './dummy/dummy';
import { Ngmodulesusage } from './ngmodulesusage/ngmodulesusage';
import { Parentcmp } from './parentcmp/parentcmp';
import { Childcmp } from './childcmp/childcmp';
import { Pipes } from './pipes/pipes';
import { Servicescall } from './servicescall/servicescall';
import { Calculatorservices } from './calculatorservices/calculatorservices';
import { Home } from './home/home';
import { Directive } from '@angular/core';
import { Directives } from './directives/directives';
import { Rxjxdata } from './rxjxdata/rxjxdata';
import { Angularwebapi } from './angularwebapi/angularwebapi';

export const routes: Routes = [
    { path: '', redirectTo: 'angularconcepts', pathMatch: 'full' },
    { path: 'dummy', component: Dummy },
    { path: 'Directives', component:Directives},
    { path: 'angularconcepts', component: AngularConcepts },
    { path: 'decorators', component: Decorators },
    { path: 'signals', component: Signals },
    { path: 'ngmodulesusage', component: Ngmodulesusage },
    { path: 'parentcmp', component: Parentcmp },
    { path: 'childcmp', component: Childcmp },
    { path: 'pipes', component: Pipes },
    { path: 'Servicescall', component: Servicescall },
    { path: 'calculatorservices', component: Calculatorservices},
    { path: 'Home', component:Home},
    { path: 'Rxjxdata', component:Rxjxdata},
    { path: 'Angularconnect', component:Angularwebapi}
];

