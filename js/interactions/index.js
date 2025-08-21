import scrollInteractions from './scrollInteraction.js';
import cursorInteractions from './cursorInteraction.js';
import headerInteractions from './headerInteraction.js';
import contactInteractions from './contactInteraction.js';

export default function initInteractions() {
    scrollInteractions();
    cursorInteractions();
    headerInteractions();
    contactInteractions();
}