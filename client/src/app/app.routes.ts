import {RouterModule,Routes} from '@angular/router';
import {BookingComponent} from './booking/booking.component';

const APP_ROUTES: Routes=
[
	{path:'',redirectTo:'/booking',pathMatch: 'full'},
	{path:'booking',component:BookingComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
