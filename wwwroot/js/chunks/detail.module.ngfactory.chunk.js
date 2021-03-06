webpackJsonp([4,5,7],{

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Angular 2 decorators and services
 */
// import { BrowserModule } from '@angular/platform-browser'
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var common_1 = __webpack_require__(102);
var router_1 = __webpack_require__(22);
var core_1 = __webpack_require__(7);
//
var detail_routes_1 = __webpack_require__(481);
/*
 * Shared Utilities & Other Services
 */
var utility_service_1 = __webpack_require__(5);
/**
 * Imported Components
 */
var detail_component_1 = __webpack_require__(478);
var DetailModule = (function () {
    function DetailModule() {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Detail\" Module!', utility_service_1.Logging.normal.orange);
        }
    }
    DetailModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                // SharedModule,
                router_1.RouterModule.forChild(detail_routes_1.detailRoutes)
            ],
            declarations: [
                detail_component_1.DetailComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DetailModule);
    return DetailModule;
}());
exports.DetailModule = DetailModule;


/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = __webpack_require__(109);
var import1 = __webpack_require__(103);
var import2 = __webpack_require__(112);
var import3 = __webpack_require__(111);
var import4 = __webpack_require__(107);
var import6 = __webpack_require__(489);
var import7 = __webpack_require__(478);
var import8 = __webpack_require__(66);
var import9 = __webpack_require__(108);
var DetailModuleInjector = (function (_super) {
    __extends(DetailModuleInjector, _super);
    function DetailModuleInjector(parent) {
        _super.call(this, parent, [import6.DetailComponentNgFactory], []);
    }
    Object.defineProperty(DetailModuleInjector.prototype, "_LOCALE_ID_3", {
        get: function () {
            if ((this.__LOCALE_ID_3 == null)) {
                (this.__LOCALE_ID_3 = null);
            }
            return this.__LOCALE_ID_3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailModuleInjector.prototype, "_NgLocalization_4", {
        get: function () {
            if ((this.__NgLocalization_4 == null)) {
                (this.__NgLocalization_4 = new import4.NgLocaleLocalization(this._LOCALE_ID_3));
            }
            return this.__NgLocalization_4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailModuleInjector.prototype, "_ROUTES_5", {
        get: function () {
            if ((this.__ROUTES_5 == null)) {
                (this.__ROUTES_5 = [[{
                            path: '',
                            component: import7.DetailComponent
                        }
                    ]]);
            }
            return this.__ROUTES_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailModuleInjector.prototype, "_TRANSLATIONS_FORMAT_6", {
        get: function () {
            if ((this.__TRANSLATIONS_FORMAT_6 == null)) {
                (this.__TRANSLATIONS_FORMAT_6 = null);
            }
            return this.__TRANSLATIONS_FORMAT_6;
        },
        enumerable: true,
        configurable: true
    });
    DetailModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ROUTER_FORROOT_GUARD, null));
        this._DetailModule_2 = new import1.DetailModule();
        return this._DetailModule_2;
    };
    DetailModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.RouterModule)) {
            return this._RouterModule_1;
        }
        if ((token === import1.DetailModule)) {
            return this._DetailModule_2;
        }
        if ((token === import8.LOCALE_ID)) {
            return this._LOCALE_ID_3;
        }
        if ((token === import4.NgLocalization)) {
            return this._NgLocalization_4;
        }
        if ((token === import9.ROUTES)) {
            return this._ROUTES_5;
        }
        if ((token === import8.TRANSLATIONS_FORMAT)) {
            return this._TRANSLATIONS_FORMAT_6;
        }
        return notFoundResult;
    };
    DetailModuleInjector.prototype.destroyInternal = function () {
    };
    return DetailModuleInjector;
}(import0.NgModuleInjector));
exports.DetailModuleNgFactory = new import0.NgModuleFactory(DetailModuleInjector, import1.DetailModule);


/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(7);
/*
 * Shared Utilities
 */
var utility_service_1 = __webpack_require__(5);
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 * external stylesheets. Do NOT add styles the "Angular2 Way" in the
 * @Component decorator ("styles" and "styleUrls" properties)
 */
__webpack_require__(483);
var DetailComponent = (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Detail\" component!', utility_service_1.Logging.normal.lime);
        }
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'detail',
            template: __webpack_require__(486),
        }), 
        __metadata('design:paramtypes', [])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;


/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/**
 * Imported Components
 */
var detail_component_1 = __webpack_require__(478);
// async components must be named detailRoutes for WebpackAsyncRoute
exports.detailRoutes = [{
        path: '',
        component: detail_component_1.DetailComponent,
    }];
;


/***/ },

/***/ 483:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 486:
/***/ function(module, exports) {

module.exports = "<h1>Hello from Detail (sub module)</h1>\n<div class=\"row\">\n   <div class=\"col s4\">\n      <div class=\"card-panel\">\n          <span>I am a very simple card. I am good at containing small bits of information.\n          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.\n          </span>\n      </div>\n   </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = __webpack_require__(19);
var import1 = __webpack_require__(478);
var import3 = __webpack_require__(21);
var import4 = __webpack_require__(17);
var import7 = __webpack_require__(16);
var import8 = __webpack_require__(15);
var import9 = __webpack_require__(20);
var import10 = __webpack_require__(18);
var import11 = __webpack_require__(106);
var import12 = __webpack_require__(65);
var import13 = __webpack_require__(105);
var nodeDebugInfos_DetailComponent_Host0 = [new import0.StaticNodeDebugInfo([import1.DetailComponent], import1.DetailComponent, {})];
var renderType_DetailComponent_Host = null;
var _View_DetailComponent_Host0 = (function (_super) {
    __extends(_View_DetailComponent_Host0, _super);
    function _View_DetailComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DetailComponent_Host0, renderType_DetailComponent_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_DetailComponent_Host0);
    }
    _View_DetailComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('detail', rootSelector, this.debug(0, 0, 0));
        this._appEl_0 = new import4.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_DetailComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._DetailComponent_0_4 = new import1.DetailComponent();
        this._appEl_0.initComponent(this._DetailComponent_0_4, [], compView_0);
        compView_0.create(this._DetailComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_DetailComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import1.DetailComponent) && (0 === requestNodeIndex))) {
            return this._DetailComponent_0_4;
        }
        return notFoundResult;
    };
    _View_DetailComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._DetailComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_DetailComponent_Host0;
}(import3.DebugAppView));
function viewFactory_DetailComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_DetailComponent_Host === null)) {
        (renderType_DetailComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_DetailComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.DetailComponentNgFactory = new import10.ComponentFactory('detail', viewFactory_DetailComponent_Host0, import1.DetailComponent);
var styles_DetailComponent = [];
var nodeDebugInfos_DetailComponent0 = [
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([], null, {}),
    new import0.StaticNodeDebugInfo([import11.RouterOutlet], null, {}),
    new import0.StaticNodeDebugInfo([], null, {})
];
var renderType_DetailComponent = null;
var _View_DetailComponent0 = (function (_super) {
    __extends(_View_DetailComponent0, _super);
    function _View_DetailComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DetailComponent0, renderType_DetailComponent, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_DetailComponent0);
    }
    _View_DetailComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'h1', this.debug(0, 0, 0));
        this._text_1 = this.renderer.createText(this._el_0, 'Hello from Detail (sub module)', this.debug(1, 0, 4));
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', this.debug(2, 0, 39));
        this._el_3 = this.renderer.createElement(parentRenderNode, 'div', this.debug(3, 1, 0));
        this.renderer.setElementAttribute(this._el_3, 'class', 'row');
        this._text_4 = this.renderer.createText(this._el_3, '\n   ', this.debug(4, 1, 17));
        this._el_5 = this.renderer.createElement(this._el_3, 'div', this.debug(5, 2, 3));
        this.renderer.setElementAttribute(this._el_5, 'class', 'col s4');
        this._text_6 = this.renderer.createText(this._el_5, '\n      ', this.debug(6, 2, 23));
        this._el_7 = this.renderer.createElement(this._el_5, 'div', this.debug(7, 3, 6));
        this.renderer.setElementAttribute(this._el_7, 'class', 'card-panel');
        this._text_8 = this.renderer.createText(this._el_7, '\n          ', this.debug(8, 3, 30));
        this._el_9 = this.renderer.createElement(this._el_7, 'span', this.debug(9, 4, 10));
        this._text_10 = this.renderer.createText(this._el_9, 'I am a very simple card. I am good at containing small bits of information.\n          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.\n          ', this.debug(10, 4, 16));
        this._text_11 = this.renderer.createText(this._el_7, '\n      ', this.debug(11, 6, 17));
        this._text_12 = this.renderer.createText(this._el_5, '\n   ', this.debug(12, 7, 12));
        this._text_13 = this.renderer.createText(this._el_3, '\n', this.debug(13, 8, 9));
        this._text_14 = this.renderer.createText(parentRenderNode, '\n', this.debug(14, 9, 6));
        this._el_15 = this.renderer.createElement(parentRenderNode, 'router-outlet', this.debug(15, 10, 0));
        this._appEl_15 = new import4.AppElement(15, null, this, this._el_15);
        this._RouterOutlet_15_5 = new import11.RouterOutlet(this.parentInjector.get(import12.RouterOutletMap), this._appEl_15.vcRef, this.parentInjector.get(import13.ComponentFactoryResolver), null);
        this._text_16 = this.renderer.createText(parentRenderNode, '\n', this.debug(16, 10, 31));
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16
        ], [], []);
        return null;
    };
    _View_DetailComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.RouterOutlet) && (15 === requestNodeIndex))) {
            return this._RouterOutlet_15_5;
        }
        return notFoundResult;
    };
    _View_DetailComponent0.prototype.destroyInternal = function () {
        this.debug(15, 10, 0);
        this._RouterOutlet_15_5.ngOnDestroy();
    };
    return _View_DetailComponent0;
}(import3.DebugAppView));
function viewFactory_DetailComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_DetailComponent === null)) {
        (renderType_DetailComponent = viewUtils.createRenderComponentType('C:/Source/GitHub/angular2-aot-webpack2-typescript-dotnet/master/src/app-components/+detail/detail.template.html', 0, import9.ViewEncapsulation.None, styles_DetailComponent, {}));
    }
    return new _View_DetailComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_DetailComponent0 = viewFactory_DetailComponent0;


/***/ }

});
//# sourceMappingURL=../maps/detail.module.ngfactory.map