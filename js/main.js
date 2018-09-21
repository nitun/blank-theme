/**
 * Main scripts, loaded on all pages.
 *
 * @package Blank_Theme
 */

import '../sass/main.scss';
import * as components from './components';

window.$ = window.$ || jQuery;

// Initialize common scripts.
components.common.init();
