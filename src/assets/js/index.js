// import './alpine';
// https://github.com/tabler/tabler/issues/337#issuecomment-624754935

import '../css/button-styles.css';
import '../scss/base-style.scss';

window.bootstrap = require('bootstrap'); require('./tabler.js');



(function(window, document, undefined){

	// code that should be taken care of right away
    
	window.onload = init;
	
    function init(){
        // the code to be called when the dom has loaded
		// #document has its nodes
        var element = document.getElementById('message');
		if (typeof element !== "undefined" && element != null ) {
			window.addEventListener('load', () => {
                document.getElementById('message').textContent = 'FROM Webpack';
            });             
		}

	  }
	
})(window, document, undefined);