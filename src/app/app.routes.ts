import { Routes } from '@angular/router';
import { AngularConcepts } from './angular-concepts/angular-concepts';
import { App } from './app';
import { Decorators } from './decorators/decorators';
import { Signals } from './signals/signals';
import { Dummy } from './dummy/dummy';
import { Ngmodulesusage } from './ngmodulesusage/ngmodulesusage';
import { Parentcmp } from './parentcmp/parentcmp';

export const routes: Routes = [
    { path: '', redirectTo: 'angularconcepts', pathMatch: 'full' },
    { path: 'dummy', component: Dummy },
    { path: 'angularconcepts', component: AngularConcepts },
    { path: 'decorators', component: Decorators },
    { path: 'signals', component: Signals },
    { path: 'ngmodulesusage', component: Ngmodulesusage },
    { path: 'parentcmp', component: Parentcmp }
];

