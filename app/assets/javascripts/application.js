/*
  The following comments are parsed by Gulp include
  (https://www.npmjs.com/package/gulp-include) which uses
  Sprockets-style (https://github.com/sstephenson/sprockets)
  directives to concatenate multiple Javascript files into one.
*/
//= require ../../../node_modules/jquery/dist/jquery.js
//= require ../../../node_modules/digitalmarketplace-frontend-toolkit/toolkit/javascripts/list-entry.js
//= require ../../../node_modules/digitalmarketplace-frontend-toolkit/toolkit/javascripts/word-counter.js
//= require ../../../node_modules/govuk_frontend_toolkit/javascripts/govuk/selection-buttons.js
//= require ../../../node_modules/govuk_frontend_toolkit/javascripts/govuk/shim-links-with-button-role.js
//= require ../../../node_modules/digitalmarketplace-frontend-toolkit/toolkit/javascripts/shim-links-with-button-role.js
//= require ../../../node_modules/digitalmarketplace-frontend-toolkit/toolkit/javascripts/show-hide-content.js
; // Hack needed because show-hide-content.js does not have a closing ";"
//= require ../../../node_modules/govuk-frontend/all.js
//= require ../../../node_modules/digitalmarketplace-govuk-frontend/digitalmarketplace/all.js
//= require _selection-buttons.js
//= require ../../../node_modules/digitalmarketplace-frontend-toolkit/toolkit/javascripts/module-loader.js

GOVUKFrontend.initAll()
DMGOVUKFrontend.initAll()
