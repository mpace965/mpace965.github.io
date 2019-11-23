require('./styles/index.scss');

import jquery from 'jquery';
import PopperJs from 'popper.js';

const $ = window.$ = window.jQuery = jquery;

require('bootstrap');

$(document).ready(() => {
    $('body').scrollspy({ target: '.navbar' });
});