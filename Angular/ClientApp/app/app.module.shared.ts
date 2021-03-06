import {FormsModule} from '@angular/forms';
import {ErrorHandler, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import {VehicleFormComponent} from "./components/vehicle-form/vehicle-form.component";
import {MakeService} from "./services/make.service";
import {FeatureService} from "./services/feature.service";
import {VehicleService} from "./services/vehicle.service";
import { ToastyModule} from "ng2-toasty";
import { AppErrorHandler} from "./components/app/app.errorHandler";
@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        VehicleFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ToastyModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'vehicle/new', component: VehicleFormComponent },
            { path: 'vehicle/:id', component: VehicleFormComponent },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [  {provide: ErrorHandler, useClass: AppErrorHandler}, MakeService, 
        FeatureService, 
        VehicleService
       
    ]
})
export class AppModuleShared {
}
