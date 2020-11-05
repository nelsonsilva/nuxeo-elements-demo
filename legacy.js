// expose Polymer and PolymerElement for 1.x and 2.x compat
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
window.Polymer = Polymer;

// expose Nuxeo globals for compat
import { FormatBehavior } from '@nuxeo/nuxeo-ui-elements/nuxeo-format-behavior.js';
import { I18nBehavior } from '@nuxeo/nuxeo-ui-elements/nuxeo-i18n-behavior.js';
import { LayoutBehavior } from '@nuxeo/nuxeo-ui-elements/nuxeo-layout-behavior.js';
import { RoutingBehavior } from '@nuxeo/nuxeo-ui-elements/nuxeo-routing-behavior.js';
Object.assign(Nuxeo, { FormatBehavior, I18nBehavior, LayoutBehavior, RoutingBehavior });