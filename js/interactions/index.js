import scrollInteractions from './scroll-interaction.js';
import cursorInteractions from './cursor-interaction.js';
import headerInteractions from './header-interaction.js';
import projectInteractions from './project-interaction.js';
import contactInteractions from './contact-interaction.js';

export default function initInteractions() {
    scrollInteractions();
    cursorInteractions();
    headerInteractions();
    projectInteractions();
    contactInteractions();
}