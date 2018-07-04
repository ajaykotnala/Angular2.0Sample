import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerComponent } from '../Component/CustomerComponent';
import { SupplierComponent } from '../Component/SupplierComponent';
import { MasterPageComponent } from '../Component/MasterPageComponent';
import { WelcomeComponent } from '../Component/WelcomeComponent';
import { RouterModule } from '@angular/router';
import { ApplicationRoutes } from '../Routing/Routing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

@NgModule({
    imports: [RouterModule.forRoot(ApplicationRoutes),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [CustomerComponent, MasterPageComponent, SupplierComponent, WelcomeComponent],
    bootstrap: [MasterPageComponent]
})
export class MainModuleLibrary { }