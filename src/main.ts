import 'virtual:windi.css';
import './style.css';
import * as video from './scripts/video';
import * as sections from './scripts/sections';
import * as header from './scripts/header';
import * as menu from './scripts/menu';

header.attach('.brand');
menu.attach('#menu-btn');
video.attach('#video-origin');
sections.attach('section');
