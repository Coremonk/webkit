import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// import * as monaco from 'monaco-editor';

// https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md#option-2-using-plain-webpack
// window.monaco = monaco.editor;
window.monaco = monaco;

// (function(window, document, undefined){

// 	// code that should be taken care of right away

// 	window.onload = init;
	
// 	  function init(){
// 		// the code to be called when the dom has loaded
// 		// #document has its nodes
// 		var element = document.getElementById('container');
// 		if (typeof element !== "undefined" && element != null ) {
// 			monaco.editor.create(document.getElementById('container'), {
// 				value: `const foo = () => 0;`,
// 				language: 'javascript',
// 				theme: 'vs-dark'
// 			});
// 		}

// 	  }
	
// })(window, document, undefined);
