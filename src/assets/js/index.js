// import './alpine';
// https://github.com/tabler/tabler/issues/337#issuecomment-624754935

import '../css/button-styles.css';
import '../scss/base-style.scss';

window.bootstrap = require('bootstrap'); require('./tabler.js');

window.addEventListener('load', () => {
    document.getElementById('message').textContent = 'FROM Webpack';
}); 