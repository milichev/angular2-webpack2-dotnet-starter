// app.component.ts
/**
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

/*
 * Shared Utilities
 */
import { Logging } from '../services/utility.service';
import { AppState } from '../services/appstate.service';
import { Authentication } from '../services/authentication.service';
import { manualForceChangeDetection, autoForceChangeDetection } from '../common/forceChangeDetection';

/** Materialize JS - needs to be required() here so its within the app.bundle.js - must use
 * "script-loader" or custom jQuery functions will be undefined within the  components
 *
 * Materialize CSS: The SCSS require() must come before KendoUI for css specificity to be correct
 **/
/** jQuery 3.1.0 */
window.$ = window.jQuery = require('jquery');
require('script!materialize-css/dist/js/materialize.js'); // must pass through "script-loader"
require('materialize-css/sass/materialize.scss');


/**
 * THIS IS WHERE WE REQUIRE/IMPORT CSS/SCSS FILES THAT THIS COMPONENT NEEDS
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
import './app.style.scss'

/**
 * AppComponent Component
 * Top Level Component
 */
@Component({
   selector: 'body',
   encapsulation: ViewEncapsulation.None,
   host: { '[class.authenticated]': 'appState.state.isAuthenticated' },
   templateUrl: './app.template.html'
})

export class AppComponent {
   loading = false;
   isAuthenticated: boolean;
   login: any;

   constructor(
      public appState: AppState,
      public authService: Authentication) {

      this.isAuthenticated = authService.isLoggedIn();
      this.appState.set('isAuthenticated', this.isAuthenticated);
   }

   ngOnInit() {
      if (Logging.isEnabled.light) {
         console.log('%c Hello \"App\" component!', Logging.normal.lime);
      }
      if (Logging.isEnabled.verbose) {
         console.log('Initial AppComponent State', this.appState.state);
         console.log(`%c Logged In: ${this.isAuthenticated}`, Logging.normal.white);

         //==== AppComponent Wide Initializations ====//

         // Materialize Select
         $('select').material_select();

         //==== End AppComponent Wide Initializations ====//

      }
   }

   ngAfterViewInit() {
      // The ngAfterViewInit lifecycle hook makes sure the view is rendered so jQuery can do it's thing
      // This is where you put all your "$(document).ready() {}" code
      // this.loadJqxGrid();

   }

   manualDetectChanges() {
      manualForceChangeDetection();
   }

   autoDetectChanges() {
      autoForceChangeDetection();
   }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
