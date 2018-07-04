"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var CustomerComponent_1 = require("../Component/CustomerComponent");
var SupplierComponent_1 = require("../Component/SupplierComponent");
var MasterPageComponent_1 = require("../Component/MasterPageComponent");
var WelcomeComponent_1 = require("../Component/WelcomeComponent");
var router_1 = require("@angular/router");
var Routing_1 = require("../Routing/Routing");
var forms_1 = require("@angular/forms");
var MainModuleLibrary = /** @class */ (function () {
    function MainModuleLibrary() {
    }
    MainModuleLibrary = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(Routing_1.ApplicationRoutes),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule],
            declarations: [CustomerComponent_1.CustomerComponent, MasterPageComponent_1.MasterPageComponent, SupplierComponent_1.SupplierComponent, WelcomeComponent_1.WelcomeComponent],
            bootstrap: [MasterPageComponent_1.MasterPageComponent]
        })
    ], MainModuleLibrary);
    return MainModuleLibrary;
}());
exports.MainModuleLibrary = MainModuleLibrary;
//# sourceMappingURL=MainModuleLibrary.js.map